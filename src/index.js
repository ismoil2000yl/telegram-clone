import react from 'react'
import reactDom from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

class Index extends react.Component{
    render(){
        return(
            <div>
                <App/>
            </div>
        )
    }
}

reactDom.render(<Index/>, document.getElementById('root'))