import { gql } from '@apollo/client';

export const GET_TODOS = gql`
    subscription getTodos {
        todos(order_by: {id: asc}) {
            id
            isDone
            title
        }
    }
`;

export const GET_TODO_BY_ID = gql`
    query getTodoById($id: Int!) {
        todos(where: {id: {_eq: $id}}) {
            id
            isDone
            title
        }
    }
`;

export const INSERT_TODO = gql`
    mutation insertTodo($title: String) {
        insert_todos_one(object: {isDone: false, title: $title}) {
            id
            isDone
            title
        }
    }
`

export const DELETE_TODO = gql`
    mutation deleteTodo($id: Int) {
        delete_todos(where: {id: {_eq: $id}}) {
            returning {
                id
                isDone
                title
            }
        }
    }
`

export const UPDATE_CHECKED_TODO = gql`
    mutation updateCheckedTodo($id: Int, $isDone: Boolean) {
        update_todos(where: {id: {_eq: $id}}, _set: {isDone: $isDone}) {
            returning {
                id
                isDone
                title
            }
        }
    }
`

export const UPDATE_TITLE_TODO = gql`
    mutation updateTitleTodo($id: Int, $title: String) {
        update_todos(where: {id: {_eq: $id}}, _set: {title: $title}) {
            returning {
                id
                isDone
                title
            }
        }
    }
`
