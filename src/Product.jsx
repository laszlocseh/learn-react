import {Component} from 'react';

class SearchBar extends Component {
    render() {
        return <div>Search bar here</div>
    }
}

class ProductTable extends Component {
    render() {
        return <div>Products table here</div>
    }
}

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <SearchBar />,
            <ProductTable />
        ]
    }
}

export default Product; 