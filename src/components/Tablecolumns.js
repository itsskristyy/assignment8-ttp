import React from "react"
import TableCell from "./Tablecell.js"
import {v4 as uuidv4} from "uuid"


class Column extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        let col = []
        for (let i = 0; i < this.props.row; i++){
            col.push(<TableCell key={uuidv4()} penColor={this.props.penColor} pressed={this.props.pressed}/>)
        }
        return(
            <div className="column">
                {col}
            </div>
        )
    }
}

export default Column
