import React, { Component } from "react";

class Topmovers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stock: [],
            price: [],
            percent: [],
        }
    }

    componentDidMount() {
        this.fetchmovers();
    }

    fetchmovers() {
        let stocksym = [];
        
        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=US&lang=en-US&count=10&start=0", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "e944056751msh53b3c0438c0814bp16f2a9jsna09412002786",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })
        .then(Response => Response.json())
        .then(datas => {
            console.log(datas.finance.result[0].quotes[0].symbol)
            console.log(datas);
        })


    }

}