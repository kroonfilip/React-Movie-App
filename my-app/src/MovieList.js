import React, {useState, useRef, useEffect} from 'react';

import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "AStar Wars",
        grade: 4
    },{
        id: 2,
        title: "Batman",
        grade: 5
    },{
        id: 3,
        title: "Spiderman",
        grade: 2
    },{
        id: 4,
        title: "CSuperman",
        grade: 5
    },{
        id: 5,
        title: "HSeven",
        grade: 3
    }]);

    
    const titleRef = useRef();
    const gradeRef = useRef();

    function addMovie(event){
        if (titleRef.current.value !== "" && gradeRef.current.value > 0){
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1: 1;
            setMovies([...movies, {
                id: newId,
                title: titleRef.current.value,
                grade: gradeRef.current.value,
            }])
        } else {
            alert("Du måste lägga till både titel och betyg för att lägga till en film!")
        }
        titleRef.current.value = "";
        gradeRef.current.value = "";
    
    } 

    function deleteMovie(id) {
        setMovies(movies.filter((movie) => movie.id !== id));
    }
    useEffect(() => {
        setMovies(movies)
      }, [])
  

    function handleSortAlpha() {
       const sorted = [...movies].sort((a,b) => {
           return (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase())? 1: -1
       })
       setMovies(sorted)
    }

    function handleSortNumeric() {
        const sortedNr = [...movies].sort((a, b) => {
            return (a.grade < b.grade)? 1: -1
        })
        setMovies(sortedNr)
    };
    
    //} else{
          //movies.sort((a, b) => (a.grade < b.grade) ? 1 : -1)
         // return movies.map(movie => <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie}/>)
       //} 
    
    
    
    let moviesComponents = movies.map(movie => {
    return <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie}/>;
    
   })
    
    
    return (
        <div className="row container-fluid">
            <form action ="#"onSubmit = {addMovie}>
            <label htmlFor="title">Titel:</label>
            <input id="title" className="form-control" ref={titleRef} />
            <div className="form-group">
                        <label htmlFor="grade">Betyg:</label>
                        <select id="grade" className="form-control" ref={gradeRef}>
                            <option value="" defaultValue>Välj betyg här...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <button type ="submit" value ="Submit" id="save-movie" className="btn btn-success">
                            Spara film
                        </button>
                            
                        
                    </div>
                    <hr></hr>
                    <h2>Mina filmer</h2>
                    <ul className="list-group">
                    
                   {moviesComponents}
                    
            </ul>
            </form>
            
            <button id="OrderByAlpha" onClick= {handleSortAlpha}className="btn btn-primary">Alfabetisk ordning</button>
            <button id="OrderByGrade" onClick= {handleSortNumeric}className="btn btn-primary">Betygsordning</button>
        </div>
    )
    
    
    
}
