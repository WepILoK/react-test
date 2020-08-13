import React from "react";
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png" />
      <div className={s.loginBlock}>
          {props.isAuth
              ?<div> {props.login} - <button onClick={props.logOut}>Log out</button></div>
              :<NavLink to={`/login`}>Login</NavLink>}

      </div>
    </header>
  );
};

export default Header;