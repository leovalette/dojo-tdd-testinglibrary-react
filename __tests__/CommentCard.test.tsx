import React from 'react';
import { render } from '@testing-library/react'

import '@testing-library/jest-dom';
import { CommentCard } from '../src/components/CommentCard';

describe('Comment Card', () => {
  test('it renders the comment and the author', () => {
    // Arrange
    const props = {
      comment: 'React Testing Library is great',
      author: 'Luke Ghenco',
    };

    // Act
    const { getByText } = render(<CommentCard {...props} />)
    // Assert
    const commentNode = getByText(props.comment)
    const authorTagNode = getByText(`- ${props.author}`)
    expect(commentNode).toBeDefined()
    expect(authorTagNode).toBeDefined()
  });
});
