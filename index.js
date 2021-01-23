//entry point of the file
import React from 'react'
import ReactDOM from 'react-dom'

//create APP component

function APP (props){
    return(
        <div>
            <h1>React App - from scratch...</h1>
        </div>
    )
}

ReactDOM.render(
    <APP/>,
    document.getElementById('root')
)