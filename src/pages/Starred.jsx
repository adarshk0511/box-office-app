import { useStarredShows } from "../lib/UseStarredShows";

const Starred = () => {

  const [starredShows] = useStarredShows();


  return <div>Starred Page, starred {starredShows.length}</div>;
};

export default Starred;
