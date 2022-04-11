import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

function List() {
    const [products, setProducts] = useState([{line: '', name: ''}])

    useEffect(()=> {
        fetch('http://localhost:8080/api/all')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data);
        })
    }, [])

    return (
        <div className="list">
            <h2>all products:</h2>
            {products.map((product, index) => (
                <ListItem key={index} name={product.name} line={product.line} />
            ))}
        </div>
    );
}

export default List;
