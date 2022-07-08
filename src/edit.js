import React from "react";
import {useState} from "react"
import {useSelector,useDispatch} from "react-redux";
import {useParams,useNavigate} from "react-router-dom";


export default function EditComponent(){
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const storedetails = useSelector((data) => data);
  const dispatch = useDispatch();
  const [details, setDetails] = useState([]);
  const userid = useParams();
const navigate=useNavigate();
  const handleSubmit=()=>{
const updateddetails=storedetails.map(data=>{
  console.log(data.id)
  console.log(userid)
  console.log(userid == data.id )
  if(data.id == userid.userid){
    const newdata = {
      id: userid,
      name: value,
      email: email,
      number: number,
    };
    console.log("data",newdata)
   return  data=newdata;

   
  }
return data;
})
  console.log("updateddetails",updateddetails)
  dispatch({ type: 'UPDATE_DETAIL', payload:updateddetails });
navigate("/");

  }
  return(
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
      </form>
  )
}