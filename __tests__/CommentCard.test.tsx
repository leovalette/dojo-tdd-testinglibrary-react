import React from 'react';
import { render } from '@testing-library/react'

import '@testing-library/jest-dom';

describe('Comment Card', () => {
  test('it renders the comment and the author', () => {
    // Arrange
    const props = {
      comment: 'React Testing Library is great',
      author: 'Luke Ghenco',
    };

    render(<CommentCard {...props} />)

  });
});
