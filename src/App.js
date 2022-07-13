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
    return dispatch({ type: 'FETCH_USER' });
  };

  return (
    <div className="form">
      <button onClick={handleSubmit}>Fetch User</button>

      <table>
        <thead>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Details </th>
        </thead>
<tbody>
        {storedetails.map((data) => (
          <tr key={data.userId}>
            <td>{data.userId}</td>
               <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
