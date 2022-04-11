import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { setList } from '../slices/slices'

let allProducts: any;

function List() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(store => store.app);
    const products = state.productList || [{name: '', line: ''}];

    const parseData = (data: any) => {
        if (state.search.length > 0) {
            return data.filter((product: any) => product.name.toLowerCase().includes(state.search.toLowerCase()));
        }
        return data;
    }

    useEffect(()=> {
        fetch('http://localhost:8080/api/all')
        .then(res => res.json())
        .then(data => {
            allProducts = data;
            dispatch(setList(parseData(allProducts)));
        })
    }, [])

    useEffect(() => {
        dispatch(setList(parseData(allProducts)));
    }, [state.search])

    return (
        <div className="list">
            <p className='list__header--count'>{state.productList?.length || ''} devices</p>
            <h4 className='list__header--line'>PRODUCT LINE</h4>
            <h4 className='list__header--name'>NAME</h4>
            {products.map((product, index) => (
                <ListItem key={index} name={product.name} line={product.line} />
            ))}
        </div>
    );
}

export default List;
