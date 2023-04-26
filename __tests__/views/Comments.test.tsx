import {
  render,
  cleanup,
  waitFor,
  fireEvent,
  act,
} from '@testing-library/react';
import axios from 'axios';
import { vi } from 'vitest';
import { Comments } from '../../src/views/Comments';
import { Comment } from '../../src/models/comment';

const comment1: Comment = {
  id: 1,
  comment: 'I do love writing tests',
  author: 'The Notester',
};
const comment2: Comment = {
  id: 2,
  comment: 'Nothing is better than a good comment app',
  author: 'Comment Hater',
};
const newComment: Comment = {
  id: 3,
  comment: 'Brave new world of testing',
  author: 'Spongebob',
};
const comments: Comment[] = [comment1, comment2];

describe('Comments Screen', () => {
  afterEach(cleanup);
  beforeEach(() => {
    axios.get = vi.fn(() => Promise.resolve({ data: comments }));
    axios.post = vi.fn(() => Promise.resolve({ data: newComment }));
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

  test('it creates a new comment, renders it and clears out form upon submission', async () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <Comments />
    );
    await waitFor(() => getByText(comment1.comment));
    const submitButton = getByText('Add Comment');
    const commentTextfieldNode = getByPlaceholderText(
      'Write something...'
    ) as HTMLTextAreaElement;
    const nameFieldNode = getByLabelText('Your Name') as HTMLInputElement;
    fireEvent.change(commentTextfieldNode, {
      target: { value: newComment.comment },
    });
    fireEvent.change(nameFieldNode, { target: { value: newComment.author } });
    fireEvent.click(submitButton);
    await waitFor(() => getByText(`- ${newComment.author}`));
    expect(commentTextfieldNode.value).toEqual('');
    expect(nameFieldNode.value).toEqual('');
  });
});
