import axios from "axios";

const TMDB=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
});

const getMoviesByTerm=(SearchTerm, setMovies, page_number,setTotalPages)=>{
    TMDB.get("/search/movie",{
        params:{
            api_key:"265f62af9689c8b07414a7138dcd2f00",
            query : SearchTerm,
            page:page_number
        },
    }).then((response)=>{
        console.log(response);
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
    });
};


const getMovieDetails=(movieID,setCurrentMovie)=>{
    TMDB.get("/movie"+movieID,{
        params:{
            api_key:"265f62af9689c8b07414a7138dcd2f00",
        },
    }).then((response)=>{
        console.log(response.data);
        setCurrentMovie(response.data);
       
    });
};


export  {getMoviesByTerm, getMovieDetails};