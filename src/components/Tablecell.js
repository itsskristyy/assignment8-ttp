import React from "react";

class TableCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white'
    };
    this.fillColor = this.fillColor.bind(this)
  }

  // componentDidMount(){
  //   window.addEventListener("mouseover", (e)=>{
  //     if(this.props.pressed == true && e.target.className == "cell"){
  //       e.target.style.backgroundColor = document.getElementById("selectColor").value
  //     }
  //   })
  // }

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
        onClick={this.fillColor}
      >
        {/* {this.props.pressed == true ? "t" : "f"} */}
      </div>
    );
  }
}

export default TableCell;

