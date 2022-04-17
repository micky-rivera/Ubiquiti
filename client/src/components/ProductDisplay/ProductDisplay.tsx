import React, { useEffect, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

let allProducts: Product[] = [];
const address = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "";

function List() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(store => store.app);
    const [products, setproducts] = useState<Product[]>([{name: '', line: '', deviceId: '06a25b40-ef1f-463a-82d9-13236866ea3d', details: []}]);
    const [notFound, setNotFound] = useState(false);

    const parseData = (data: Product[]) => {
        let searchTerm = '';
        let filters: string[] = [];
        if (window.localStorage.search) {
            searchTerm = JSON.parse(window.localStorage.search).term;
        }
        if (window.localStorage.filters) {
            filters = JSON.parse(window.localStorage.filters).terms;
        }
        if (searchTerm.length > 0 || filters.length > 0) {
            if (filters.length > 0) {
                return data.filter((product: Product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .filter((product: Product) => filters.includes(product.line.toLowerCase())); // need to make this case insensitive!
            }
            return data.filter((product: Product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        return data;
    }

    useEffect(()=> {
        fetch(`${address}/api/all`)
        .then(res => res.json())
        .then(data => {
            allProducts = data;
            setproducts(parseData(allProducts));
            setNotFound(false);
        })
        .catch((err) => {
            setNotFound(true);
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
            <div className={notFound ? 'hidden' : ''}>
                <div className={state.format === 'list' ? 'list' : 'grid'} data-testid='list'>
                    <div className={state.format === 'list' ? 'list-header' : 'hidden'}>
                        <p className='list-header__count'>{products.length || '0'} devices</p>
                        <h4 className='list-header__line'>PRODUCT LINE</h4>
                        <h4 className='list-header__name'>NAME</h4>
                    </div>
                    <p className={state.format === 'grid' ? 'grid-header__count' : 'hidden'}>{products.length || '0'} devices</p>
                    {products.map((product: Product, index) => (
                        <ListItem key={index} name={product.name} line={product.line} deviceId={product.deviceId} details={product.details} />
                    ))}
                </div>
            </div>
            <div className={notFound ? 'list__not-found' : 'hidden'}>
                <h2>Oops! There was an issue fetching the products.</h2>
                <h3>Please try again later.</h3>
            </div>
        </>
    );
}

export default List;
