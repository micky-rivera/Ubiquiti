import React from "react";
import Header from '../Header';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<BrowserRouter><Provider store={store}><Header /></Provider></BrowserRouter>)
})

it('renders the "Devices" title', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><Header /></Provider></BrowserRouter>);
    expect(getByTestId('header')).toHaveTextContent('Devices');
})

it('renders my name', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><Header /></Provider></BrowserRouter>);
    expect(getByTestId('header')).toHaveTextContent('Micky Rivera');
})

it('renders the Ubiquiti logo', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><Header /></Provider></BrowserRouter>);
    expect(getByTestId('UI-logo')).toBeInTheDocument();
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<BrowserRouter><Provider store={store}><Header /></Provider></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})