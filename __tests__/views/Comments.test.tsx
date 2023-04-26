import { render, cleanup, waitFor } from '@testing-library/react';
import axios from 'axios';
import { vi } from 'vitest';
import { Comments } from '../../src/views/Comments';

const comment1 = {
  id: 1,
  comment: 'I do love writing tests',
  author: 'The Notester',
};
const comment2 = {
  id: 2,
  comment: 'Nothing is better than a good comment app',
  author: 'Comment Hater',
};
const comments = [comment1, comment2];
describe('Comments Screen', () => {
  afterEach(cleanup);
  beforeEach(() => {
    axios.get = vi.fn(() => Promise.resolve({ data: comments }));
  });

  test('It fetches comments and renders them to the page', async () => {
    const { getByText } = render(<Comments />);
    await waitFor(() => getByText(comment1.comment));

    const firstCommentNode = getByText(comment1.comment);
    const firstAuthorTagNode = getByText(`- ${comment1.author}`);
    const secondCommentNode = getByText(comment2.comment);
    const secondAuthorTagNode = getByText(`- ${comment2.author}`);
    expect(firstCommentNode).toBeDefined();
    expect(firstAuthorTagNode).toBeDefined();
    expect(secondCommentNode).toBeDefined();
    expect(secondAuthorTagNode).toBeDefined();
  });
});
