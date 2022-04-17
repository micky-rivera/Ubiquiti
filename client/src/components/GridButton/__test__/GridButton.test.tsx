import React from "react";
import GridButton from '../GridButton';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { createRoot } from 'react-dom/client';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Provider store={store}><GridButton /></Provider>)
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<Provider store={store}><GridButton /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})