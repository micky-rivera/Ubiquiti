import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import GridItem from './GridItem';

let allProducts: any = [];

function List() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(store => store.app);
    const [products, setproducts] = useState([{name: '', line: '', deviceId: '06a25b40-ef1f-463a-82d9-13236866ea3d', details: []}]);

    const parseData = (data: any) => {
        let searchTerm = '';
        if (window.localStorage.search) {
            searchTerm = JSON.parse(window.localStorage.search).term;
        } else {
            searchTerm = state.search;
        }
        if (searchTerm.length > 0 || state.filters.length > 0) {
            if (state.filters.length > 0) {
                return data.filter((product: any) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .filter((product: any) => state.filters.includes(product.line)); // need to make this case insensitive!
            }
            return data.filter((product: any) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        return data;
    }

    useEffect(()=> {
        fetch('http://localhost:8080/api/all')
        .then(res => res.json())
        .then(data => {
            allProducts = data;
            setproducts(parseData(allProducts));
        })
    }, [])

    useEffect(() => {
        setproducts(parseData(allProducts));
    }, [state.search])
    
    useEffect(() => {
        setproducts(parseData(allProducts));
    }, [state.filters])

    return (
        <>
            <div className={state.format === 'list' ? 'list' : 'grid'}>
                <div className={state.format === 'list' ? 'list-header' : 'hidden'}>
                    <p className='list-header__count'>{products.length || '0'} devices</p>
                    <h4 className='list-header__line'>PRODUCT LINE</h4>
                    <h4 className='list-header__name'>NAME</h4>
                </div>
                <p className={state.format === 'grid' ? 'grid-header__count' : 'hidden'}>{products.length || '0'} devices</p>
                {products.map((product, index) => (
                    <ListItem key={index} name={product.name} line={product.line} deviceId={product.deviceId} details={product.details} />
                ))}
                {products.map((product, index) => (
                    <GridItem key={index} name={product.name} line={product.line} deviceId={product.deviceId} details={product.details} />
                ))}
            </div>
        </>
    );
}

export default List;
