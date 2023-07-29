import React from 'react';
import CommentBox from 'components/commentBox';
import CommentList from 'components/commentList';

export default function app() {
  return (
    <div>
      <CommentBox/>
      <CommentList/>
    </div>
  )
}
