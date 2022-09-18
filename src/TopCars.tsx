import React from 'react';

type TopCarsProps = {
    topCars: Array<TopCarsType>,
}
type TopCarsType = {
    manufacturer: string,
    model: string,
}

export const TopCars = (props: TopCarsProps) => {

    let arrOfCars = props.topCars.map((cars, index) => {
        return (
            <tr key={index}>
                <td>{cars.manufacturer}</td>
                <td>{cars.model}</td>
                <td>{index.valueOf() + 1}</td>
            </tr>
        )
    });

    return (
        <div>
            <table>
                <tr >
                    <th>Manufacturer |</th>
                    <th> Model |</th>
                    <th>Index</th>
                </tr>
                {arrOfCars}
            </table>
        </div>
    )
}