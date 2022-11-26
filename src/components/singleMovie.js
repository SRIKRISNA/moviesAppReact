import './style.css'

function SingleMovie(movie){
    console.log(movie.info);
    var bg_img = "https://image.tmdb.org/t/p/w500"
    return (
        <>
            <div className="header">
                <h3>MovieDb</h3>
                <nav>
                    <ul>
                        {
                            arrData.map((value)=>{
                                return(
                                    <li><a href="#" name={value} onClick={(e) => {getData(e.target.name)}}>{value}</a></li>
                                )
                            })
                        }
                        
                    </ul>
                </nav>
                <form>
                    <div className="searchBox">
                        <input type="text" placeholder="Search Movie Name" className="searchText" onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie}></input>
                        <button className="search-btn" onClick={SearchResult}><i class="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
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