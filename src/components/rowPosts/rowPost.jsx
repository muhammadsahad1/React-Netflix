import React, { useState, useEffect ,useContext } from "react";
import Youtube from "react-youtube";
import { imageUrl, API_KEY } from "../../constants/constans";
import axios from "../../axios";
import toast, { Toaster } from "react-hot-toast";
import { SearchCon } from "../../context/searchContext";

// Component for displaying a row of movie posters with an option to play trailers
const RowPost = ({ url, title, isSmall }) => {
  // State variables for storing fetched movies and selected trailer URL
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  const [searchMoive,setSearchMoive] = useState([])
  const { searchMovie } = useContext(SearchCon)


  // Fetch movies data from the provided URL when the component mounts
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setMovies(response.data.results))
      .catch((err) => {
        console.log("Failed to fetch data", err);
      });
  }, []);

  const searchVal = searchMovie.toLowerCase()
  useEffect(()=>{
    const filterMovie = movies.filter((movieObj)=>{
      return movieObj.title && movieObj.title.toLowerCase().includes(searchVal)
    })
    console.log("filterMovie",filterMovie)
    setSearchMoive(filterMovie)
  },[searchMovie])
  console.log("searchMoive",searchMoive)
  
  // Options for configuring the YouTube player
  
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  
  // Function to handle fetching the trailer for a movie based on its ID
  const handleMovieId = (movieId) => {
    axios
    .get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
        console.log(response.data.results[0]);
      } else {
        toast.error("Oops! Trailer not available");
      }
    })
    .catch((err) => {
      toast.error("Oops! Trailer not available");
      console.log(err);
    });
  };
  
const Movies = searchMoive.length != 0 ? searchMoive : movies

  return (
    <div className="row">
      {/* Display the title of the row */}
      <h2>{title}</h2>
      {/* Render movie posters */}
      <div className="posters">
        {Movies.map((item) => (
          <img
            key={item.id}
            onClick={() => handleMovieId(item.id)}
            className={isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + item.backdrop_path}`}
            alt={item.title}
          />
        ))}
      </div>
      {/* Display the trailer if a URL is available */}
      {urlId ? <Youtube videoId={urlId.key} opts={opts} /> : null}
      {/* Toast notifications component */}
      <Toaster />
    </div>
  );
};

export default RowPost;
