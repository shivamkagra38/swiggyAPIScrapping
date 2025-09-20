import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../utils/cartSlice.js';

const About = () => {

  console.log("About Called");
  const selector = useSelector((store) => {return store.cart.items});

  const dis = useDispatch();

  const [state,setState] = useState(0);

const handle = () => {

  dis(removeItem());

  setTimeout(()=>{setState(state+1)}, 5000)

}

  return (
    <div className="menu">
      {selector.length}
      <button onClick={handle}>Change</button>
    </div>
  );

}

export default About;
