import React, { Component } from 'react';
import axios from 'axios';

export default class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productData: {}
        }
    }
    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.productId}`)
            .then(res => this.setState({ productData: res.data }))
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <h3>{this.state.productData.title}</h3>
                <p>{this.state.productData.url}</p>
                <img src={this.state.productData.thumbnailUrl} className="img-thumbnail" alt="Product" />
            </div>
        )
    }
}
