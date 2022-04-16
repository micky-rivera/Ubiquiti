import React from "react";
import * as ReactDOM from "react-dom";
import GridButton from '../GridButton';
import { Provider } from 'react-redux'
import {store} from '../../../store/store'
import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><GridButton /></Provider>, div)
})

it('matches snapshot', () => {
    const tree = TestRenderer.create(<Provider store={store}><GridButton /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})