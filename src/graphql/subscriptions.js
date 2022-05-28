/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String) {
    onCreateNote(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String) {
    onUpdateNote(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String) {
    onDeleteNote(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateStaple = /* GraphQL */ `
  subscription OnCreateStaple($owner: String) {
    onCreateStaple(owner: $owner) {
      count
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStaple = /* GraphQL */ `
  subscription OnUpdateStaple($owner: String) {
    onUpdateStaple(owner: $owner) {
      count
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStaple = /* GraphQL */ `
  subscription OnDeleteStaple($owner: String) {
    onDeleteStaple(owner: $owner) {
      count
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
