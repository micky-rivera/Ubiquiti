import React from "react";
import ProductDisplay from '../ProductDisplay';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<BrowserRouter><Provider store={store}><ProductDisplay /></Provider></BrowserRouter>)
})

it('renders device count', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ProductDisplay /></Provider></BrowserRouter>);
    expect(getByTestId('list')).toHaveTextContent('devices');
})

it('renders the name header', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ProductDisplay /></Provider></BrowserRouter>);
    expect(getByTestId('list')).toHaveTextContent('NAME');
})

it('renders the line header', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ProductDisplay /></Provider></BrowserRouter>);
    expect(getByTestId('list')).toHaveTextContent('PRODUCT LINE');
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<BrowserRouter><Provider store={store}><ProductDisplay /></Provider></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})