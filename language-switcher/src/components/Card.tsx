import React, { FC, useContext } from 'react'
import { LangContext } from './context/LangContext';
type Data = {
    img: string,
    title: string,
    genre: string,
    date: string,
    description: string,
    link: string
};

type CardProps = {
    data: Data
};

export const Card: FC<CardProps> = ({ data }): JSX.Element => {
    const card = useContext(LangContext).currentLang;

    console.log(card);
    
    return (
        <div className="Card">
            <div className="img-container">
                <img src={data.img} alt={data.title} />
            </div>
            <h3>data.title</h3>
            <div>
                {/* <p>
                    <strong>{card?.genre}</strong>: {data.genre}
                </p>
                <p>
                    <strong>{card?.date}</strong>: {data.date}
                </p> */}
            </div>
            <p className="description">{data.description}</p>
            <a href={data.link}>Read More</a>
        </div>
    )
}