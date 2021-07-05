import axios from 'axios'
import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export default class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products: []
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                this.setState({ products: res.data })
            })
            .catch(err => console.log('error', err))
    }

    render() {
        return (
            <div>
                <h1>Products Page</h1>
                <hr />

                {
                    this.state.products.map(product => {
                        return (
                            <div className="m-5" key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.thumbnailUrl} className="img-thumbnail" alt={product.title} />
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
