import { FC, useCallback, useEffect, useState } from 'react';
import { Comment } from '../models/comment';
import axios from 'axios';
import { CommentList } from '../components/CommentList';
import { CommentForm } from '../components/CommentForm';

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

  const addComment = useCallback(
    (comment: Comment) => {
      setComments([...comments, comment]);
    },
    [comments]
  );
  return (
    <div>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
};
