import { gql, useQuery } from '@apollo/client'

const bookQuery = gql`{
  books{
    title,
    genre,
  },
  authors{
    name
  }
}`;

export default function Home() {

  const { data, error, loading } = useQuery(bookQuery);

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      { data.books.map((book, index) => <div key={index}>
        { book.title }
        </div>) }
    </div>
  )
}
