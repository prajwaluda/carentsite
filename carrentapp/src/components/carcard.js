import React from "react";
import './stil.css';
import imag1 from './labrador.jpeg'
import data from "./cardata";



class Carcard extends React.Component{
    render(){
        return(
            <div>
                {data.map(car=>(
                <div>
                <span class="carcard">
                    <img src={imag1} alt="image not found" class="imag"/>
                    <div className="new">
                        <div className="carname">{}</div>
                        <div className="launchyear">{car.year}</div>
                    </div>
                    <div className="features1">
                        <span> {car.capacity}</span>
                        <span>{car.fuel}</span>
                    </div>
                    <div className="features2">
                        <span>{car.mileage}</span>
                        <span>{car.gear}</span>
                    </div>
                    <div className="amount2">
                        <h3 className="amount">{car.rent}</h3><span>/month</span>
                        <button className="wish" >3</button>
                        <button className="rent">Rent now</button>
                    </div>
                </span>
            </div>
                ))}
            </div>
        )
    }
}

export default Carcard;