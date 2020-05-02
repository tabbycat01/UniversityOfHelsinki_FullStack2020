import {gql} from '@apollo/client'

export const ALL_AUTHORS = gql `
    query {
        allAuthors {
            name
            born
            bookCount
        }
    }
`

export const ALL_BOOKS_NO_GENRE = gql`
    query {
        allBooks {
            title
            author
            published
        }
    }
`