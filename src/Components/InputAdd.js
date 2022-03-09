import { useContext } from 'react'
import {MyContext} from '../App.js'

function InputAdd(){

const value = useContext(MyContext)


    return(
        <div>
            {
                value.mode
                ?
                <div className='edit-body-menu'>
                    <button className='btn btn-outline-danger mx-2 ' onClick={value.changeEditMode}>X</button>
                    <input type='text' onChange={value.editValue} defaultValue={value.item} className='form-control '/>
                    <button className='btn btn-outline-success mx-2' onClick={value.importEdit}>Ok</button>
                </div>
                :<div className="body-menu">
                    <input type='text' value={value.input} onChange={value.inputValue} className="form-control"/>
                    <button onClick={value.importInfo} className="btn btn-primary mx-2 col-md-3">Add</button>
                </div>
            }
        </div>
    )
}

export default InputAdd