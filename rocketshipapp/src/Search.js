import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchresult:[]
        }
    }
    render(){
        return(
            <ul className="control">
            <input className="input" type="text" placeholder="Search"></input>
            </ul>
        )
    }
}
export default Search;
