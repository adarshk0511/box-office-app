import { getShowById, getShowByIds } from "../api/tvmaze";
import ShowGrid from "../components/shows/ShowGrid";
import { useStarredShows } from "../lib/UseStarredShows";
import { useQuery } from "@tanstack/react-query";

const Starred = () => {

  const [starredShowsIds] = useStarredShows();

  const {data: starredShows , error: starredShowsError} = useQuery({
    queryKey: ['starred',starredShowsIds],
    queryFn: () => getShowByIds(starredShowsIds).then(result=>result.map(show =>({show}))
    ) ,
    
    refetchOnWindowFocus: false
  })


  if(starredShows?.length === 0){
    return <div> No show starred</div>
  }

  if(starredShows?.length >0){
    return <ShowGrid shows={starredShows}/>
  }

  if(starredShowsError){
    return <div>Error occured : {starredShowsError.message}</div>
  }

  return <div>Shows are loading.....</div>;
};

export default Starred;
