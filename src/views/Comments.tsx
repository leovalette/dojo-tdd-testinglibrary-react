import { FC, useEffect, useState } from 'react';
import { Comment } from '../models/comment';
import axios from 'axios';
import { CommentList } from '../components/CommentList';

export const Comments: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    axios
      .get<Comment[]>('/api/comments')
      .then(({ data }) => {
        setComments(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      <CommentList comments={comments} />
    </div>
  );
};
