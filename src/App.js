import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function App() {

  const storedetails = useSelector((data) => data);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  return   dispatch({ type: "FETCH_USER"});
  
};

  return (
    <form>
     

      <button onClick={handleSubmit}>Fetch User</button>
      {handleSubmit}

     { storedetails.length > 0  && storedetails.map(data=>
      <p>{data.title} </p>)}
    </form>
  );
}
