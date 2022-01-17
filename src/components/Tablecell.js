import React from "react";


// x x x
// x x x

// row = 2
// column = 3

// tablecolumn : 
// x
// x


class TableCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'white'
    };

    this.fillColor = this.fillColor.bind(this)
  }

  fillColor(){
    let penColor = document.getElementById("selectColor").value
    this.setState({color: penColor})
  }

  render() {
    return (
      <div className="cell" style={{
        backgroundColor: this.state.color,
        width: "100px",
        height: "100px",
        margin: "3px",
        border: "1px solid grey"
      }} 
        onClick={this.fillColor}>
      
      </div>
    );
  }
}

export default TableCell;

