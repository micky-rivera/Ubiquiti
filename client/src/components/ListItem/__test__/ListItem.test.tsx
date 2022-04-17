import React from "react";
import ListItem from '../ListItem';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

afterEach(cleanup);

const name = 'test product';
const line = 'test line';
const deviceId = '06a25b40-ef1f-463a-82d9-13236866ea3d';
const details = [
    {
        label: 'test label',
        content: 'test content'
    }
]

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<BrowserRouter><Provider store={store}><ListItem name={name} line={line} deviceId={deviceId} details={details} /></Provider></BrowserRouter>)
})

it('renders the name correctly', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ListItem name={name} line={line} deviceId={deviceId} details={details} /></Provider></BrowserRouter>);
    expect(getByTestId('list-item')).toHaveTextContent(name);
})

it('renders the line correctly', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ListItem name={name} line={line} deviceId={deviceId} details={details} /></Provider></BrowserRouter>);
    expect(getByTestId('list-item')).toHaveTextContent(line);
})

it('renders an image', () => {
    const { getByTestId } = render(<BrowserRouter><Provider store={store}><ListItem name={name} line={line} deviceId={deviceId} details={details} /></Provider></BrowserRouter>);
    expect(getByTestId('img')).toBeInTheDocument();
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<BrowserRouter><Provider store={store}><ListItem name={name} line={line} deviceId={deviceId} details={details} /></Provider></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})