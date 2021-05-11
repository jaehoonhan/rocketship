import React from "react";
import SearchField from "react-search-field";

const SearchBar = () => {
//
//  api_search() {
//    const API_KEY = "R5l9TcJ_bCGQqYQ82Ym3iVKM_39u99eG";
//    let API_SEARCH = "https://api.polygon.io/v3/reference/tickers?market=stocks&search=" + UserInput + "&active=true&sort=ticker&order=asc&limit=5&apiKey=" + API_KEY;
//
//    fetch(API_SEARCH)
//      .then(function (response) { return response.json(); })
//      .then(function (data) {
//        console.log(data)
//      });
//  }
//
//  handleChange(even) {
//    this.setState({value: event.target.value});
//    UserInput = this.state.value;
//    console.log(UserInput);
//    this.api_search();
//  }
//
  return (
    <SearchField
      placeholder="Search stocks or category.."
      classNames="test-class"
      //searchText="default-text-goes-here"
    />
  );
}


export default SearchBar;
