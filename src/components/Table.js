import React from "react"
import TableColumn from "./Tablecolumns.js"
import {v4 as uuidv4} from "uuid"
import TableCell  from "./Tablecell.js"


class Table extends React.Component{

    constructor(props){
        super(props)

    }

    

    render(){
        let table = []
        for(let i = 0; i < this.props.column; i++){
            table.push(<TableColumn row={this.props.row} key={uuidv4()}/>)
        }
        return(
            <div className="" style={styles.tableStyle}>
                {table}
            </div>
        )
    }
}

export default Table

const styles = {
    tableStyle: {
        display: "flex"
    }
}


