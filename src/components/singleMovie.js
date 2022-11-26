import './style.css'

function SingleMovie(movie){
    console.log(movie.info);
    var bg_img = "https://image.tmdb.org/t/p/w500"
    return (
        <>
        
            <div className="movie" >
                <img src={bg_img+movie.info.backdrop_path} alt="bg_img" className="poster"></img>
                <div className="movie_details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleMovie;