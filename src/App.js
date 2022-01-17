import React from "react";
import Table from "./components/Table.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      penColor: "red",
      row: 1,
      column: 1,
    };

    this.addRow = this.addRow.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.addColumn = this.addColumn.bind(this)
    this.deleteColumn = this.deleteColumn.bind(this)
    this.fillAll = this.fillAll.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.handlePenColorChange = this.handlePenColorChange(this)

  }

  addRow(){
    this.setState({row: this.state.row+1});
  }

  deleteRow(){
    this.setState({
      row: this.state.row > 0 ? this.state.row-1 : 0
    });
  }

  addColumn(){
    this.setState({column: this.state.column+1});
  }

  deleteColumn(){
    this.setState({column: this.state.column > 0 ? this.state.column-1 : 0});
  }

  fillAll(){
    const cells = document.getElementsByClassName("cell")
    const penColor = document.getElementById("selectColor").value
    for(let i in cells){
      cells[i].style.backgroundColor = penColor 
    }
  }

  clearAll(){
    const cells = document.getElementsByClassName("cell")
    for(let i in cells){
      cells[i].style.backgroundColor = "white"
    }
  }

  fillUncolored(){
    const cells = document.getElementsByClassName("cell")
    const penColor = document.getElementById("selectColor").value
    for(let i in cells){
      cells[i].style.backgroundColor = cells[i].style.backgroundColor === "white" ? penColor : cells[i].style.backgroundColor
    } 
  }

  handlePenColorChange(e){
    this.setState({penColor: e.value})
  }



  render() {
    return (
      <div className="App">

      <div className = "buttons">
      <button onClick={this.addRow}> Add Row </button>
      <button onClick={this.deleteRow}> Delete Row </button>
      <button onClick={this.addColumn}> Add Column </button>
      <button onClick={this.deleteColumn}> Delete Column </button>
      <button onClick={this.fillAll}> Fill All </button>
      <button onClick={this.clearAll}> Clear All </button>
      <button onClick={this.fillUncolored}> Fill Uncolored </button>

      <button> Pick a Color &nbsp;
      <select name="selectColor" id="selectColor" onChange={this.handlePenColorChange}>
      <option value="red">Red</option>
      <option value="blue">Blue </option>
      <option value="green">Green </option>
      <option value="brown">Brown </option>
      <option value="pink">Pink </option>
      </select>
      </button>



      <Table row={this.state.row} column={this.state.column} penColor={this.state.penColor}/>


      </div>
      </div>
    );
  }








}

export default App;
