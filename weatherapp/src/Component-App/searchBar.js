import React,{Component} from 'react';
//import Icon from 'react-fontawesome'
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
input:'',
        }
    }
    handleInput = (e) =>{

this.setState({input:e.target.value})
    }
    onSublite=()=>{
console.log("new",this.state.input);
    }
 render(){
    return (
        
       <div className="mainsearch">
              <div className="input-icons">
                <i className="fa fa-search"></i>
                <input
                  className="input-field"
                  type="search"
                  placeholder="search..."
                 onChange={this.handleInput}
                />
                <button className="button" onClick={this.onSublite}> Weather</button>
                </div>
        </div>
      );
 }   }export default SearchBar;