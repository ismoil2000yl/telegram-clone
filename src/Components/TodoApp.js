import { useContext } from 'react'
import {MyContext} from '../App.js'

function TodoApp(){

    const value = useContext(MyContext)

    return(
        <div className="top-menu">
            <h1 className="text-center">Tasklar soni:</h1>
            <button className="btn btn-primary mx-5">{value.length}</button>
        </div>
    )
}

export default TodoApp