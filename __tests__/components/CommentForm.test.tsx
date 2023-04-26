import { fireEvent, render } from '@testing-library/react';
import { CommentForm } from '../../src/components/CommentForm';

describe('Comment Form', () => {
  test('it has a disabled button until both comment textbox and "Your Name" field have a value', () => {
    // Arrange
    const comment = 'Never put off until tomorrow what can be done today.';
    const author = 'Sensei Wu';
    // Act
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <CommentForm />
    );
    // Assert
    const submitButton = getByText('Add Comment') as HTMLButtonElement;
    expect(submitButton.disabled).toEqual(true);
    const commentTextfieldNode = getByPlaceholderText('Write something...');
    fireEvent.change(commentTextfieldNode, { target: { value: comment } });
    expect(submitButton.disabled).toEqual(true);
    const nameFieldNode = getByLabelText('Your Name');
    fireEvent.change(nameFieldNode, { target: { value: author } });
    expect(submitButton.disabled).toEqual(false);
  });
});
