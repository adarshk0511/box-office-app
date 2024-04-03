import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState, useReducer } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const reducerFn = () => {

}

const Home = () => {
  
  const [filter, setFilter] = useState(null);

  const [counter, dispatch] = useQuery(reducerFn, 0);


  const {data: apiData , error: apiDataError} = useQuery({
    queryKey: ['search',filter],
    queryFn: ()=> filter.searchOption==='shows'? searchForShows(filter.q):searchForPeople(filter.q),
    enabled:!!filter,
    refetchOnWindowFocus: false
  })
  
  const onSearch = async ({ q, searchOption }) => {
    setFilter({q, searchOption})

  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if(apiData?.length === 0){
        return <div>No results</div>
    }
    if (apiData) {
      return apiData[0].show
        ?<ShowGrid shows={apiData}/>
        : <ActorsGrid actors={apiData}/>;
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};


export default Home;
