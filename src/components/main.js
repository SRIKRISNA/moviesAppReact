import { useEffect, useState } from "react";
import Card from "./card";
import "./style.css";

var API_key = "&api_key=7c01b82b0aa395aad5febf7f163923a8";
var base_URL = "https://api.themoviedb.org/3";
var url = base_URL+"/discover/movie?sort_by=popularity.desc"+API_key;
var top_rated_movie = base_URL+"/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc"+API_key;
var upcoming_movie = base_URL+"/discover/movie?primary_release_date.gte=2022-11-30"+API_key;
var arrData = ["Popular","Top Rated","Upcoming"]

function Main(){
    const [movieData, setMovieData] = useState([]);
    const [url_set, setURL] = useState(url);
    const [search, setSearch]=useState();

    useEffect(()=>{
        // event.preventDefault()
        fetch(url_set).then(res => res.json()).then(data=>{
            setMovieData(data.results);
        })
    }, [url_set])

    const getData=(movieType)=>{
        if(movieType==="Popular")
            url=base_URL+"/discover/movie?sort_by=popularity.desc"+API_key;
        if(movieType==="Top Rated"){
            url=top_rated_movie;
        }
        if(movieType==="Upcoming")
            url=upcoming_movie;
        setURL(url)
    }
    // const searchMovie=(event)=>{
    //     event.preventDefault()
    //     if(event.key === "Enter"){
    //         url = base_URL+"/search/movie?api_key=7c01b82b0aa395aad5febf7f163923a8&query="+search;
    //         setURL(url)
    //         // setSearch(" ")
    //     }
        
    // }
    function SearchResult(event){
                event.preventDefault()
        url = base_URL+"/search/movie?api_key=7c01b82b0aa395aad5febf7f163923a8&query="+search;
        setURL(url)
        setSearch(" ")
    }
    
    return(
        <>
            <div className="header">
                <h3>MovieDb</h3>
                <nav>
                    <ul>
                        {

                            arrData.map((value)=>{
                                // let id = Date.now();
                                return(
                                    
                                    <li><a href="#" name={value} onClick={(e) => {getData(e.target.name)}}>{value}</a></li>
                                )
                            })
                        }
                        
                    </ul>
                </nav>
                <form>
                    <div className="searchBox">
                    {/* onKeyPress={searchMovie} */}
                        <input type="text" placeholder="Search Movie Name" className="searchText" onChange={(e)=>{setSearch(e.target.value)}} value={search} ></input> 
                        <button className="search-btn" onClick={SearchResult}><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="container">
                {
                    (movieData.length===0)
                     ? <p className="notfond">Not Found (404)</p>
                     : movieData.map((res, pos)=>{
                        return(
                            <Card info={res} key={pos}/>
                        )
                     })
                }
            </div>
        </>
    )
}
export default Main;