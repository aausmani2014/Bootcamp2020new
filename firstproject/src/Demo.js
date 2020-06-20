import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';

class Demo extends Component{
        render(){
            return <div className="maindiv_style">
                <h1>Hello World! from {this.props.name}</h1>
                    <h4>Created by: Aamir Usmani</h4>
                    <p>This is my First React Project</p>
                    </div>
        }

}
export default Demo;