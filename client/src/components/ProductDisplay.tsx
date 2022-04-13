import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { setList } from '../slices/slices'
import GridItem from './GridItem';

let allProducts: any;

function List() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(store => store.app);
    const products = state.productList || [{name: '', line: '', deviceId: ''}];

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
        <>
            <div className={state.format === 'list' ? 'list' : 'grid'}>
                <div className={state.format === 'list' ? 'list-header' : 'hidden'}>
                    <p className='list-header__count'>{state.productList?.length || ''} devices</p>
                    <h4 className='list-header__line'>PRODUCT LINE</h4>
                    <h4 className='list-header__name'>NAME</h4>
                </div>
                <p className={state.format === 'grid' ? 'grid-header__count' : 'hidden'}>{state.productList?.length || ''} devices</p>
                {products.map((product, index) => (
                    <ListItem key={index} name={product.name} line={product.line} deviceId={product.deviceId} />
                ))}
                {products.map((product, index) => (
                    <GridItem key={index} name={product.name} line={product.line} deviceId={product.deviceId} />
                ))}
            </div>
        </>
    );
}

export default List;
