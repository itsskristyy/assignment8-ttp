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
      color: "",
    };
  }


  render() {
    return (
      <section style={styles.cellStyle}></section>
    );
  }
}

export default TableCell;

const styles = {
  cellStyle:{
    backgroundColor: "blue",
    width: "100px",
    height: "100px",
    margin: "3px"
  }
}
