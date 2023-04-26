import React, { FC } from 'react';
import { CommentCard } from './CommentCard';
import { Comment } from '../models/comment';

interface Props {
  comments: Comment[];
}
export const CommentList: FC<Props> = ({ comments }) => (
  <div>
    {comments.map((comment) => (
      <CommentCard key={comment.id} {...comment} />
    ))}
  </div>
);
