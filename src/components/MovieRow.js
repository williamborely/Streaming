import React from "react";
import './MovieRow.css';

export default ({title, items}) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow-listarea">
                <div className="movieRow-list">
                    {items.results.map((item, key) => (
                        <div className="movieRow-item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.name}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}