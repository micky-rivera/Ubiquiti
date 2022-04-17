import React from "react";
import Form from '../Form';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { createRoot } from 'react-dom/client';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Provider store={store}><Form /></Provider>)
})

it('renders the X in clear button', () => {
    const { getByTestId } = render(<Provider store={store}><Form /></Provider>);
    expect(getByTestId('search-form__clear-btn')).toHaveTextContent('✕');
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<Provider store={store}><Form /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})