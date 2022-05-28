/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createStaple = /* GraphQL */ `
  mutation CreateStaple(
    $input: CreateStapleInput!
    $condition: ModelStapleConditionInput
  ) {
    createStaple(input: $input, condition: $condition) {
      count
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateStaple = /* GraphQL */ `
  mutation UpdateStaple(
    $input: UpdateStapleInput!
    $condition: ModelStapleConditionInput
  ) {
    updateStaple(input: $input, condition: $condition) {
      count
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteStaple = /* GraphQL */ `
  mutation DeleteStaple(
    $input: DeleteStapleInput!
    $condition: ModelStapleConditionInput
  ) {
    deleteStaple(input: $input, condition: $condition) {
      count
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
