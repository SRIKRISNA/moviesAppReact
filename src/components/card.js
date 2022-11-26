// import poster1 from '../assests/forestgump.jpg';
import './style.css'
function Card(movie) {
    console.log(movie.info);
    var img_pat = "https://image.tmdb.org/t/p/w500"
    return (
        <>
            <div className="movie">
                <img src={img_pat+movie.info.poster_path} className="poster"></img>
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
export default Card;