import React from "react";
import * as ReactDOM from "react-dom";
import App from '../App';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, div)
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})