import React, {
  CSSProperties,
  ChangeEvent,
  FC,
  useCallback,
  useMemo,
  useState,
} from 'react';

const formStyle: CSSProperties = {
  margin: 'auto',
  padding: '0px',
  width: '500px',
};
const commentBoxStyle: CSSProperties = {
  width: '494px',
  height: '80px',
  marginBottom: '12px',
};
const buttonStyle: CSSProperties = {
  marginTop: '12px',
  width: '500px',
  color: '#ffffff',
  backgroundColor: '#767676',
  padding: '6px',
  borderRadius: '8px',
};
const inputFieldStyle: CSSProperties = {
  width: '360px',
  float: 'right',
};

export const CommentForm: FC = () => {
  const [author, setAuthor] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const isDisabled = useMemo<boolean>(
    () => comment.trim() === '' || author.trim() === '',
    [author, comment]
  );

  const onCommentChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setComment(event.target.value);
    },
    []
  );

  const onAuthorChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  }, []);

  return (
    <form style={formStyle}>
      <div>
        <textarea
          style={commentBoxStyle}
          onChange={onCommentChange}
          placeholder="Write something..."
          name="comment"
          value={comment}
        />
      </div>
      <div>
        <label htmlFor="author" aria-labelledby="author">
          Your Name
        </label>
        <input
          style={inputFieldStyle}
          onChange={onAuthorChange}
          id="author"
          type="text"
          name="author"
          value={author}
        />
      </div>
      <button style={buttonStyle} disabled={isDisabled}>
        Add Comment
      </button>
    </form>
  );
};
