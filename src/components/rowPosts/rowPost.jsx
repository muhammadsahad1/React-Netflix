import React, { useState, useEffect } from "react";
import Youtube from 'react-youtube'
import { imageUrl ,API_KEY} from "../../constants/constans";
import axios from "../../axios";
import toast, { Toaster } from 'react-hot-toast';

// For Row contents

const RowPost = ({url,title,isSmall}) => {
  let [movies, setMovies] = useState([]);
  let [urlId,setUrlId] = useState('')

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setMovies(response.data.results))
      .catch((err) => {
        console.log("didn't fetch data", err);
      });
  }, []);
  
    
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
  
  const handleMovieId = (movieId) => {
      axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
          if(response.data.results.length !== 0 ) {
            setUrlId(response.data.results[0])  
            console.log(response.data.results[0])
        }else{
          toast.error('oops trailer not available')
        }
  
      }).catch(err => {
        toast.error('oops trailer not available')
        console.log(err)
      })
  }


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((item) => {
          return (
            <img key={item.id}  onClick={()=>handleMovieId(item.id)} className={isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + item.backdrop_path}`} />
          );
        })} 
      </div>
        { urlId ?  <Youtube videoId={urlId.key} opts={opts}/> : " "}
      <Toaster />
    </div>
  )

  
};

export default RowPost;
