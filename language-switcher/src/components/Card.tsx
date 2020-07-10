import React, { FC, useContext } from 'react';
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

type ContextData = {
  date: string,
  description: string,
  genre: string,
  link: string,
  title: string
};

type Title = {
  h1: string
};

type ContextProps = {
  app: Title,
  card: ContextData
};

export const Card: FC<CardProps> = (props: CardProps): JSX.Element => {
  const context: ContextProps = useContext(LangContext).currentLang;

  return (
    <div className="img-thumbnail mt-3 mb-3 p-5">
      <div style={{ textAlign: "center" }}>
        <img 
          className="img-fluid img-thumbnail rounded" 
          style={{ width: '60%' }} 
          src={props.data.img} 
          alt={props.data.title} />
      </div>
      <div>
        <h3>{props.data.title}</h3>
        <p>
          <strong>{context.card.genre}</strong>: {props.data.genre}
        </p>
        <p>
          <strong>{context.card.date}</strong>: {props.data.date}
        </p>
        <p>
          <strong>{context.card.description}</strong>: {props.data.description}
        </p>
        <a href={props.data.link}>{context.card.link}</a>
      </div>
    </div>
  )
}