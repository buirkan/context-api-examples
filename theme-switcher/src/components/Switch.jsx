import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';

export default function Switch() {
  const { dark, toogle } = React.useContext(ThemeContext);
  return (
    <React.Fragment>
      <button className="Switch" onClick={() => toogle()}>
        <Sun className={`icon ${!dark ? 'active' : ''}`} />
        <Moon className={`icon ${dark ? 'active' : ''}`} />
      </button>
    </React.Fragment>
  )
}
