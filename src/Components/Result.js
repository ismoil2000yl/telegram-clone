import Edit from '../Icons/edit.png'
import Deleted from '../Icons/delete.png'
import { useContext } from 'react'
import {MyContext} from '../App.js'


function Result(){

    const value = useContext(MyContext)

    function deletedBtn(index){
        value.deletedImport(index)
    }

    return(
        <div className='footer-menu'>
            {
                value.info.map((item, index)=>{
                    return(
                        <div className="result-menu" key={index}>
                            <h4>{item}</h4>
                            <img alt='' src={Edit} onClick={()=>value.changeEditMode(item)} className='edit'/>
                            <img alt='' src={Deleted} onClick={()=>deletedBtn(index)} className='delete'/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Result