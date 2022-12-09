import React from "react";
import "./info.css";

const Information = ({ heading, p1, p2 = "" }) => {
  return (
    <section className='info'>
      <h3>{heading}</h3>
      <p>{p1}</p>
      <p>{p2}</p>
    </section>
  );
};

export default Information;
