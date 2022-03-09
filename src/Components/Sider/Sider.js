import react from "react";
import { ModalBody, ModalFooter, ModalHeader, Modal } from "reactstrap";
import '../Sider/Sider.css'

class Sider extends react.Component{

    state={
        isToggleModal:false
    }

    isToggleFunction=()=>{
        this.setState({
            isToggleModal:!this.state.isToggleModal
        })
    }

    submitForm=(event)=>{
        event.preventDefault()
        let firstName = event.target[0].value
        let lastName = event.target[1].value
        let phone = event.target[2].value
        this.props.addUser(firstName, lastName, phone)
        this.isToggleFunction()
    }

    userClicked=(user)=>{
        this.props.selectUser(user)
    }

    render(){
        const{users, selectedUser} = this.props
        const {isToggleModal} = this.state
        return(
            <div className="sider">
                <button className="btn btn-dark mt-1 col-md-12" onClick={this.isToggleFunction}>Add User</button>
                    <hr/>
                    <ul className="list-group">
                    {
                        users.map((item, index)=> (<li onClick={()=>this.userClicked(item)} className={`list-group-item listUsers my-1 ${selectedUser.id===item.id ?'active' :''}`}>{item.firstName+' '+item.lastName}</li>))
                    }
                    </ul>

                <Modal isOpen={isToggleModal} toggle={this.isToggleFunction}>
                    <ModalHeader>
                        <h1>Add User</h1>
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.submitForm} id="addUser">
                            FirstName: <input type='text' className="form-control"/>
                            LastName: <input type='text' className="form-control"/>
                            Phone Number: <input type='text' className="form-control"/>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-outline-primary" form="addUser">Save</button>
                        <button className="btn btn-outline-danger" onClick={this.isToggleFunction}>Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Sider