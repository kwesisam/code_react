import { useState } from 'react';
import './App.css';
import Navigation from './Navigation';


function App() {

  const name = "hi";
  const [namea, set] = useState("Samuel");
  const [blogs,setB] = useState([{id:1, message:"Hello a", author:"san"},
  {id:1, message:"Hello a", author:"san"},
  {id:2, message:"Hello b", author:"san"},
  ]);
  
  
  
  function sayName(){
    set("Steve");
  }
  return (
    <div className="App">
        <Navigation/>
        <p>{namea}</p>
        <button onClick={sayName}>Change</button>
        {blogs.map(blog => (
          <div className="f" key={blog.id}>
            <p>{blog.message}</p>
            <p>{blog.author}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
