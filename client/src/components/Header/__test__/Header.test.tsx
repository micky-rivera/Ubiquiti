import React from "react";
import * as ReactDOM from "react-dom";
import Header from '../Header';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Header /></Provider>, div)
})

it('renders the "Devices" title', () => {
    const { getByTestId } = render(<Provider store={store}><Header /></Provider>);
    expect(getByTestId('header')).toHaveTextContent('Devices');
})

it('renders my name', () => {
    const { getByTestId } = render(<Provider store={store}><Header /></Provider>);
    expect(getByTestId('header')).toHaveTextContent('Micky Rivera');
})

it('renders the Ubiquiti logo', () => {
    const { getByTestId } = render(<Provider store={store}><Header /></Provider>);
    expect(getByTestId('UI-logo')).toBeInTheDocument();
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<Provider store={store}><Header /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})