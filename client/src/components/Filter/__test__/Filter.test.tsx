import React from "react";
import Filter from '../Filter';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { createRoot } from 'react-dom/client';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Provider store={store}><Filter /></Provider>)
})

it('renders the button with the word "filter', () => {
    const { getByTestId } = render(<Provider store={store}><Filter /></Provider>);
    expect(getByTestId('filter-btn')).toHaveTextContent('Filter');
})

it('renders the body of the popup', () => {
    const { getByTestId } = render(<Provider store={store}><Filter /></Provider>);
    expect(getByTestId('filter-popup__body')).toHaveTextContent('Product Line');
})

it('renders the very last check item', () => {
    const { getByTestId } = render(<Provider store={store}><Filter /></Provider>);
    expect(getByTestId('filter-popup__body')).toHaveTextContent('Ubiquiti');
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<Provider store={store}><Filter /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})