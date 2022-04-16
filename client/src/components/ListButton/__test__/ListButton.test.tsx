import React from "react";
import * as ReactDOM from "react-dom";
import ListButton from '../ListButton';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><ListButton /></Provider>, div)
})

it('renders the active svg', () => {
    const { getByTestId } = render(<Provider store={store}><ListButton /></Provider>);
    expect(getByTestId('btn-active')).toBeInTheDocument();
})

it('renders the inactive svg', () => {
    const { getByTestId } = render(<Provider store={store}><ListButton /></Provider>);
    expect(getByTestId('btn-inactive')).toBeInTheDocument();
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<Provider store={store}><ListButton /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})