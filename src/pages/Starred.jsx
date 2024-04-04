import { getShowById, getShowByIds } from "../api/tvmaze";
import { TextCenter } from "../components/common/TextCenter";
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
    return <TextCenter> No show starred</TextCenter>
  }

  if(starredShows?.length >0){
    return <ShowGrid shows={starredShows}/>
  }

  if(starredShowsError){
    return <TextCenter>Error occured : {starredShowsError.message}</TextCenter>
  }

  return <TextCenter>Shows are loading.....</TextCenter>;
};

export default Starred;
