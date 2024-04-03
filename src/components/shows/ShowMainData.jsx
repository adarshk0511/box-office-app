const ShowMainData = ({image, name, rating, summary, genres}) => {
    return <div>
        <img src={image ? image.original : '/public/not-found-image.png'} alt="Image not gound" />

        <div>
            <h1>{name}</h1>
            <div>{rating.average || 'N/A' }</div>
            <div dangerouslySetInnerHTML={{ __html: summary}} />

            <div>
                Genres:
                <div>
                    {genres.map((genres)=> <span key={genres}>{genres}</span> )}
                </div>
            </div>
        </div>
    </div>;
};

export default ShowMainData;