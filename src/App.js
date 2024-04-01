import "./App.css";
import { useState } from "react";

function App() {
  const storage = ["iPhone 15 Pro", "Macbook Air M3"];
  const [items, setItems] = useState(storage);
  const handleSubmit = (e) => {
    e.preventDefault();
    const input1 = document.getElementById('input1').value
    const newCurrentList = [...items, input1];
    setItems(newCurrentList);
  };
  return (
    <div className="App">
      <h1>wishlist</h1>
      <form onSubmit={handleSubmit}>
        <input id="input1" type="text"></input>
        <button type="submit">
          add new wish
        </button>
      </form>
      <h2>current list</h2>
      {items.map((element, id) => {
        return <p key={id}>{element}</p>;
      })}
    </div>
  );
}

export default App;
