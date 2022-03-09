import react from "react";
import Content from "./Components/Content/Content";
import Sider from "./Components/Sider/Sider";
import './index.css'
// import {Date} from 'reactstrap'

class App extends react.Component{

    state={
        users:[],
        selectedUser:'',
        messages:[],
        history:[]
    }

    addUser=(firstName, lastName, phone)=>{
        let a = this.state.users
        a.push({id:a.length,firstName:firstName, lastName:lastName, phone:phone})
        this.setState({
            users:a
        })
        localStorage.setItem('users', JSON.stringify(a))
    }

    componentDidMount(){
        let userString = localStorage.getItem('users')
    if(userString){
      let userArray = JSON.parse(userString)
      this.setState({
        users:userArray
      })
    }

        let selectedUser = localStorage.getItem('selectedUser')
    if(selectedUser){
        let a = JSON.parse(selectedUser)
        this.setState({
            selectedUser:a
        })
        this.getMessageHistory(a)
    }

    let messages = localStorage.getItem('messages')
    if(messages){
        let a = JSON.parse(messages)
        this.setState({
            messages:a
        })
    }
}

    selectUser=(user)=>{
        this.setState({
            selectedUser:user
        })
        localStorage.setItem('selectedUser', JSON.stringify(user))
        this.getMessageHistory(user)
    }

    getMessageHistory=(user)=>{
        let b = localStorage.getItem('messages')
        if(b){
            let messages = JSON.parse(b)
            let history = messages.filter(item=>item.from===1 && item.to===user.id || item.from===user.id && item.to===1)
            this.setState({
                history
            })
        }
    }

    sendMessage=(fromId, toId, text)=>{
        let date = new Date()
        let message={
            from:fromId,
            to:toId,
            text:text,
            date:date.getHours() + ":" + date.getMinutes(),
        }
        console.log()

        let a = this.state.messages
        a.push(message)
        this.setState({
            message:a
        })
        localStorage.setItem('messages', JSON.stringify(a))
        this.getMessageHistory(this.state.users.filter(item=>item.id===toId)[0])
    }

    render(){
        const {users, selectedUser, history} = this.state
        return(
            <div>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-3 sider-parent">
                            <Sider users={users} addUser={this.addUser} selectUser={this.selectUser} selectedUser={selectedUser}/>
                        </div>
                        <div className="col-md-9 content-parent">
                            <Content history={history} selectedUser={selectedUser} sendMessage={this.sendMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App