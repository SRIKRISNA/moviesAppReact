// import poster1 from '../assests/forestgump.jpg';
import './style.css'
function Card(movie) {
    console.log(movie.info);
    var img_pat = "https://image.tmdb.org/t/p/w500"

    function ViewPage(){
        alert("Title :"+movie.info.title +"\n"+
        "ID :"+movie.info.id+"\n"+
        "Rating :"+movie.info.vote_average+"\n"+
        "Release Date :"+movie.info.release_date+"\n\n"+
        "Description :\n"+movie.info.overview)
    }
    return (
        <>
            <div className="movie" onClick={ViewPage}>
                <img src={img_pat+movie.info.poster_path} alt="imge" className="poster"></img>
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