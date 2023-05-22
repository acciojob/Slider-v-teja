import { useState,useEffect } from "react";
import React from "react";
import data from "./data";
import '../styles/App.css';
import Slider from "./Slider";


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
                {/*  */}
                <Slider index={index}>

                </Slider>

                <button className="prev" onClick={handlePrevClick}>Previous</button>
                <button className="next" onClick={hangleNextClick}>Next</button>
            </div>


        </div>
    )
}


export default App;

