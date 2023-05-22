import { useState,useEffect } from "react";
import React from "react";
import data from "./data";
import '../styles/App.css';


const App = ()=> {
    
    let [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 3000);
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, []);

    function handlePrevClick() {
        if (index == 0) {
            setIndex(3);
        } else {
            setIndex(index - 1);
        }
    }

    function hangleNextClick() {
        if (index == 3) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <div>
            <h1 id="review-heading">Reviews</h1>
            <div id="review-container">
                <div>
                    <img className="person-img" id={`person-${index}-image`} src={data[index].image}></img>
                </div>
                <div>
                    <span className="author" id={`person-${index}`}>Name: {data[index].name}</span>
                    <p className="title">Title: {data[index].title}</p>           
                    <p className="quote">Quote: {data[index].quote}</p>  
                </div>
                <button className="prev" onClick={handlePrevClick}>Previous</button>
                <button className="next" onClick={hangleNextClick}>Next</button>
            </div>


        </div>
    )
}


export default App;

