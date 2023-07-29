import React from 'react';
import App from '../app';
import { shallow } from 'enzyme';
import CommentBox from 'components/commentBox';
import CommentList from 'components/commentList';

let wrapped;

beforeEach(()=> {

    wrapped = shallow(<App/>);

});

it('Shows comment box', ()=> {

    expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('Shows comment List', ()=> {

    expect(wrapped.find(CommentList).length).toEqual(1);
});