import React from "react";
import data from './data'


const Slider = ({index})=> {
    

    console.log(index);
    console.log(`person-${index}`);


    return (
        <div>
            <div>
                <img className="person-img" id={`person-${index}-image`} src={data[index].image}></img>
             </div>
            <div>
                <span className="name" id={`person-${index}`}>Name: {data[index].name}</span>
                <p className="title">Title: {data[index].title}</p>           
                <p className="quote">Quote: {data[index].quote}</p>  
            </div>
        </div>
    )
}


export default Slider;