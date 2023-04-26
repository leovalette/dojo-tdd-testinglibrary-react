import React, { FC } from 'react';
import { CommentCard } from './CommentCard';

interface Props {
  comments: { id: number; comment: string; author: string }[];
}
export const CommentList: FC<Props> = ({ comments }) => (
  <div>
    {comments.map((comment) => (
      <CommentCard key={comment.id} {...comment} />
    ))}
  </div>
);
