import React, { useState } from "react";
import Header from "../src/components/Header";
import Input from "./components/input/Input";
import Table from "./components/table/Table";
import Button from "./components/button/Button";
import Add_input_btn from "./components/button/Add_input_btn";

function App() {
  const [input, setInput] = useState("");
  const [data,setData]=useState([]);

  const handleAdd=()=>{
    const nd =[];
    nd.push(...data,input);
    console.log(nd)
    setData(nd) 
    console.log(data,"asasa")
  }
  console.log(data,"asasa")
  return (
    <div>
      <div className="App">
        <Header />
        <div className="input-plus-btn">
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Add_input_btn />
        </div>
        <Button handleAdd={handleAdd} />
        <p>{input}</p>
      </div>
      <div>
        <Table data={data} />
      </div>
    </div>
  );
}

export default App;
