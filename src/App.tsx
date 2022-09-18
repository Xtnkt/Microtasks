import React, {useState} from 'react';
import './App.css';
import {TopCars} from "./TopCars";
import {Money} from "./Bank";


const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
    {manufacturer: 'Opel', model: '322'}
]


export const App = () => {
    return (
        <div>
            {/*<F1/>*/}
            <Money />
            <TopCars topCars={topCars}/>
        </div>
    );
}


