import React, {useState} from 'react';


type MoneyPropsType = {
    money:Array<MoneyType>,
    currentMoney:Array<MoneyType>
}

type MoneyType ={
    banknots: string,
    value: number,
    number: string
}
type ButtonPropsType ={
    onClickFilterHandler: (nameButton:'all' | 'RUBLS' | 'Dollars')=>void,
}


export const NewComponent = (props:MoneyPropsType & ButtonPropsType ) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span> {m.banknots}</span>
                            <span> {m.value}</span>
                            <span> {m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}>ruble</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>dollar</button>
            </div>
        </div>
    )
}