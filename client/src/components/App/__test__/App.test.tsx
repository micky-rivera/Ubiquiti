import React from "react";
import App from '../App';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>)
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})