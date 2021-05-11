import React from "react";

let UserInput = "";

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.handleChange();
    }

    APIsearch() {
        const API_KEY = "R5l9TcJ_bCGQqYQ82Ym3iVKM_39u99eG";
        let API_SEARCH = "https://api.polygon.io/v3/reference/tickers?market=stocks&search=" + UserInput + "&active=true&sort=ticker&order=asc&limit=5&apiKey=" + API_KEY;

        fetch(API_SEARCH)
            .then(function (response) { return response.json(); })
            .then(function (data) {

                console.log(data)
            });
    }


    handleChange(event) {
        this.setState({value: event.target.value});

        UserInput = this.state.value;
        console.log(UserInput);
        this.APIsearch();
    }

    // componentDidUpdate(){this.APIsearch()};

    handleSubmit(event) {
        UserInput = this.state.value;
        event.preventDefault();
    }



    // handleSubmit (event) {
    //     this.props.onChange(event);
    //     event.preventDefault();
    // }
    // handleChange (e) {
    //     var value = e.target.value;
    //     this.setState({message: value});
    //     this.handleSubmit(value);
    // }

    // render() {
    //     return (
    //         <div>
    //             <Select
    //                 value={selectedOption}
    //                 options={searchList}
    //                 onChange={this.handleChange}
    //                 placeholder="Search..."
    //                 openMenuOnClick={false}
    //             />
    //         </div>
    //     )
    // }

//    HOMEMADE VERSION
    render(){
        return(
            <ul className="control">
            <input value={this.state.value} onChange={this.handleChange} className="input" type="text" placeholder="Search..."></input>
            <input type="submit" onSubmit={this.handleSubmit} value="Submit"></input>
            </ul>
        )
    }

    // ONLINE VERSION
    // render() {
    //     return (
    //       <form onSubmit={this.handleSubmit}>
    //                     <label>
    //           <input type="text" value={this.state.value} onChange={this.handleChange} />
    //                     </label>
    //         <input type="submit" value="Submit" />
    //       </form>
    //     );
    //   }



}

//export default Search;
//export {UserInput};
