import react from "react";
import './Content.css'

class Content extends react.Component{

    state={
        inputValue:''
    }

    changeInputMessage=(event)=>{
        this.setState({
            inputValue:event.target.value
        })
    }

    sendMessage=()=>{
        let from = 1
        let to = this.props.selectedUser.id
        let text = this.state.inputValue
        let date = new Date();
        date = date.getHours() + ":" + date.getMinutes();
        this.props.sendMessage(from, to, text)
        this.setState({
            inputValue:''
        })
    }

    render(){
        const {selectedUser, history}=this.props
        const {inputValue}=this.state
        return(
            <div>
                {
                    selectedUser
                    ?<div className="content">
                    <div className="row">
                        <div className="col-md-12 content-header">
                            <div className="img">
                                <a>Photo</a>
                                <h3>{selectedUser.phone}</h3>
                                <p className="name">{selectedUser.firstName+' '+selectedUser.lastName}</p>
                                <h4 className="id">Id: {selectedUser.id}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sendInputStyle">
                                <input type="text" className="form-control" value={inputValue} onChange={this.changeInputMessage}/>
                                <button className="btn btn-primary mx-2" onClick={this.sendMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 content-body">
                            {
                                history.map(item=><div className="row mt-3 mx-2">
                                    <div className={`col-md-7 ${item.to===1?'kelganXabar':'ketganXabar' } message`}>
                                        <p className="text">{item.text}<span className="date">{item.date}</span></p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                :<div></div>
                }
            </div>
        )
    }
}

export default Content