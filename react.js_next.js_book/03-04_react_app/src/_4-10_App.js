import React, {useState, useEffect} from 'react';
import './App.css';

function AlertMessage(props) {
  return(
    <div className='alert alert-primary h5 text-primary'>
      <h5>{props.msg}</h5>
    </div>
  );
}

function App() {
  const [val, setVal] = useState(1000);
  const [tax1, setTax1] = useState(0);
  const [tax2, setTax2] = useState(0);
  const [msg, setMsg] = useState('<p>set a price...</p>');

  const doChange = (event) => {
    setVal(event.target.value);
  }

  const doAction = () => {
    let res = <div>
      <p>軽減税率(8%): {tax1} 円</p>
      <p>通常税率(10%): {tax2} 円</p>
    </div>
    setMsg(res);
  }

  useEffect(() => {
    setTax1(Math.floor(val * 1.08));
  });
  useEffect(() => {
    setTax2(Math.floor(val * 1.10));
  });

  return(
    <div>
      <h1 className='bg-primary text-white display-4'>React</h1>
      <div className='container'>
        <h4 className='my-3'>Hooks sample</h4>
        <AlertMessage msg={msg}></AlertMessage>
        <div className='form-group'>
          <label>input:</label>
          <input type='number' className='form-control' onChange={doChange}></input>
        </div>
        <button className='btn btn-primary' onClick={doAction}>Calc</button>
      </div>
    </div>
  );
}

export default App;
