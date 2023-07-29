import React from 'react';
// import ReactDom from 'react-dom';
import App from '../app';
import { shallow } from 'enzyme';
import CommentBox from '../commentBox';

it('Shows comment box', ()=> {

    const wrapped = shallow(<App/>);

    console.log(wrapped.find(CommentBox))
    
    expect(wrapped.find(CommentBox).length).toEqual(1);

});