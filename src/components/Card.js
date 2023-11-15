import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, icon, onClick, link }) => {
  return (
    <div className="card">
      <div className="card_container">
        <h1 className="card_title">{title}</h1>
        <div className="card_icon">{icon}</div>
        <Link to={link}>
          <button onClick={onClick}>View</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
