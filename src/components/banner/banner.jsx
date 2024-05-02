import React, { useEffect, useState } from "react";
import Youtube from 'react-youtube'
import { imageUrl ,API_KEY} from "../../constants/constans";
import axios from "../../axios";
import toast, { Toaster } from 'react-hot-toast';
import RowPost from "../rowPosts/rowPost";


// For Banner
const Banner = () => {

  let [movie, setMoive] = useState([]);
  let [urlId,setUrlId] = useState('')

  useEffect(() => {
    const random = Math.floor(Math.random() * 21)
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => setMoive(response.data.results[random]));
  }, []);
  
  const handlePlay = (movieId) => {
    axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if(response.data.results.length !== 0 ){
        setUrlId(response.data.results[0])
      }else{
        toast.error('oops trailer not available')
      }

    }).catch(err => {
      toast.error('oops trailer not available')
      console.log(err)
    })
  }

  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
      <div className="content">
        <h1 className="title">{movie ? movie.title : " "}</h1>
        <div className="banner_buttons">
          <button onClick={()=> handlePlay(movie.id)} className="buttonsBanner">Play</button>
          <button className="buttonsBanner">My list</button>
        </div>
        <h1 className="description">
          {movie.overview}
        </h1>
      </div>
      <div className="fade_bottom"></div>
      <Youtube videoId={urlId.key} opts={opts}/>
    </div>
  );
};

export default Banner;
