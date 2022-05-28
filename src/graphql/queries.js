/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getStaple = /* GraphQL */ `
  query GetStaple($id: ID!) {
    getStaple(id: $id) {
      count
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStaples = /* GraphQL */ `
  query ListStaples(
    $filter: ModelStapleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaples(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        count
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
