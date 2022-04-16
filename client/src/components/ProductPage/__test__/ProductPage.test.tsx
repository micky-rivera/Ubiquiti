import React from "react";
import * as ReactDOM from "react-dom";
import ProductPage from '../ProductPage';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Provider store={store}><ProductPage /></Provider></BrowserRouter>, div)
})

it('renders back button svg', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ProductPage /></Provider></BrowserRouter>);
    expect(getByTestId('back-btn-svg')).toBeInTheDocument();
})

it('renders title', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ProductPage /></Provider></BrowserRouter>);
    expect(getByTestId('title')).toBeInTheDocument();
})

it('renders image', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ProductPage /></Provider></BrowserRouter>);
    expect(getByTestId('img')).toBeInTheDocument();
})

it('renders information table', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ProductPage /></Provider></BrowserRouter>);
    expect(getByTestId('info')).toBeInTheDocument();
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<BrowserRouter><Provider store={store}><ProductPage /></Provider></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})