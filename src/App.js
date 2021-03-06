import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =["Razzak", "Jasim", "Alomgir", "Salam","Salman", "Mimi"];
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:"$60.99"},
    {name: "PDF Reader", price:"$6.99"},
    {name: "Premiere El", price:"$249.99"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p> I am a React developer</p>
        <Counter></Counter>
        <Users> </Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

      </header>
    </div>
  );
}
function Counter() {
    const [count, setCount] = useState(10);
    const handleIncrease = () => setCount(count + 1); 
    
  return (   
     <div>
       <h1> Count: {count} </h1>
       
       <button onMouseOver={ () => setCount(count - 1)}> Decrease </button>
       <button onClick={ () => setCount(count + 1)}> Increase </button>
    </div>
    )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('Calling Effact');
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
      {
        // users.map( user => <li>{user.name}</li>)
        // users.map( user => <li>{user.phone}</li>)
        users.map( user => <li>{user.email}</li>)
      }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle ={
     border:"1px solid grey",
     borderRadius:"5px",
     backgroundColor:"lightgray",
     height:"200px",
     width:"200px",
     float:"left",
     
  }
  const {name, price} = props.product;
  // const {name, price} = {name: 'Photoshop', price:'$90.99'};
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h3>{name} </h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
