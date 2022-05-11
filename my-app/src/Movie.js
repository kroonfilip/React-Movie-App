import React from 'react';

export default function Movie(props) {
    return (
        <li data-grade={props.movie.grade} data-title={props.movie.title} className='list-item'>
        {props.movie.title}
        <img src="/delete.png" alt="Delete movie" className="delete-movie" onClick={() => {props.deleteMovie(props.movie.id)}}></img>
        {getStars(props.movie.grade)}
        </li>
    
    )

    function getStars(grade) {
        let stars = []
        for (var i = 0; i < grade; i++) {
            stars.push(<img src="/star.png" alt="Star"></img>)
        }
        return stars
    
    
}


}