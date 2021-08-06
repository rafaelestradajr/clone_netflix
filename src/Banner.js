import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests  from './requests';

function Banner() {

 const  [movie, setMovie] = useState([]);

 useEffect(() => {
     async function  fetchData ()  {
         const request = await axios.get(requests.fetchNetflixOriginals);
         setMovie(
             request.data.results[
                 Math.floor(Math.random() * request.data.results.length
                 )
             ]
         );
         return request;
     };
     fetchData();
 }, []);
console.log(movie);

    return (
        <header className='banner'
        style={{
            backgroundSize:'cover',
            backgroundImage:
            `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition:'center center',
        }}>
          <div className='banner__contents'>
              <h1>
                  {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div
                  className="banner_buttons">
                  <button className="banner__button">Play</button>
                  <button className="banner__button">My List</button>

              </div>

          </div>
            {''}
            {/* title*/}
            {/*div >2 buttons*/}
            {/* description*/}
        </header>
    )
}

export default Banner
