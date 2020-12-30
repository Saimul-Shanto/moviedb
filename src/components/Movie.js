import React from "react";
//import {unstable renderSubtreeIntoContainer} from "react-dom";
import {Link} from "react-router-dom";
const Movie=(props)=>{
    const ImageURL="https://image.tmdb.org/t/p/w500/"+props.data.poster_path;
    return(
        
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">

            {(props.data.poster_path==null )? <img src="https://picsum.photos/200/300" alt =""  style={{width:"100" ,height:"200"}}/>:
            <img src={ImageURL} alt="" style={{width:"100" ,height:"200"}}/>
            }
              <span className="card-title">{props.data.title}</span>
            </div>
            <div className="card-content">
                {props.data.release_date}
            </div>
            <div className="card-action">
              <Link to={{pathname:"/movie/"+props.data.id, movie_id:props.data.id,}}>See Details</Link>
            </div>
          </div>
        </div>
      
    );
};
export default Movie;