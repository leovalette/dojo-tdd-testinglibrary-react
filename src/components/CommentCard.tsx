import React, { CSSProperties, FC } from 'react';

const cardStyles: CSSProperties = {
  margin: '24px',
  padding: '2px 24px',
  fontFamily: 'Palatino',
  fontStyle: 'italic',
  backgroundColor: '#f5f5f5',
  height: '80px',
  position: 'relative',
  border: '1px solid #767676',
  borderRadius: '8px',
};

const authorTagStyle: CSSProperties = {
  position: 'absolute',
  bottom: '0',
  right: '12px',
};
interface Props {
  comment: string;
  author: string;
}
export const CommentCard: FC<Props> = ({ comment, author }) => (
  <div style={cardStyles}>
    <p>{comment}</p>
    <p style={authorTagStyle}>- {author}</p>
  </div>
);
