import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

type FilterType = 'all' | 'RUBLS' | 'Dollars'


export const Money = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;

    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    return (
        <NewComponent money={money} currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    )
}


// export const F1 = () => {
//     let[a, setA] = useState(1);
//
//     const onClickHandler = () => {
//         setA(++a);
//         console.log(a);
//     }
//     const onClickHandler0 = () =>{
//         setA(a*0);
//     }
//
//     return(
//         <div>
//         <h1>{a}</h1>
//         <button onClick={onClickHandler}>+</button>
//         <button onClick={onClickHandler0}>0</button>
//         </div>
//     )
// }