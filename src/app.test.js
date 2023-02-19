import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

it('renders without crash!', ()=> {

    const div = document.createElement('div');

    ReactDom.render(<App/>, div);

    expect(div.innerHTML).toContain('Hi there!');

    ReactDom.unmountComponentAtNode(div);
});