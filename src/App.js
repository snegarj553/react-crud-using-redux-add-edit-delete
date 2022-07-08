import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function App() {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const storedetails = useSelector((data) => data);
  const dispatch = useDispatch();
  const [details, setDetails] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (((!email == !number) == !value) == '') {
      const samplearray = [
        ...details,
        { name: value, email: email, number: number },
      ];
      setDetails(samplearray);
      setEmail('');
      setNumber('');
      setValue('');

      {
        storedetails.map((data) => {
          const checkemail = data.email == email ? true : false;
          const checknumber = data.number == parseInt(number) ? true : false;
          if (checkemail) {
            alert('email is already exist ');
          }
          if (checknumber) {
            alert('number is already exists');
          }
        });
      }
      const data = {
        id: storedetails.length + 5,
        name: value,
        email: email,
        number: number,
      };

      dispatch({ type: 'ADD_DETAIL', payload: data });
    } else {
      alert('all fields need to filled');
    }
  };

  const deleteitem = (id) => {
    const data = details.filter((data) => id != data.id);
    setDetails(data);
    dispatch({ type: 'DEL_DETAIL', payload: id });
  };
  return (
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Number</label>
        <input
          type="text"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number </th>
          <th>Update</th>
          <th>Delete</th>
        </tr>

        {storedetails.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.number}</td>
            <Link to={`/edit/${data.id}`}>
           
              <td><i> &#xf044;</i>
              </td>
            </Link>
            <td onClick={() => deleteitem(data.id)}>
              <i class="fa fa-trash"></i>
            </td>
          </tr>
        ))}
      </table>
    </form>
  );
}
