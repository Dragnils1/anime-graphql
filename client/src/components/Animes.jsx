import { gql, useQuery } from '@apollo/client'
import React from 'react'
import CardWithImg from './Card/CardWithImg';

const AnimesQuery = gql`
    query Query {
        allAnimes {
            creator
            name
            category
            description
            dateOfPublic
            id
        }
}
`



export default function Animes() {

    const {data, loading, error} = useQuery(AnimesQuery)

    if (loading) {
        <div> loading ...</div>
    }

    if (error) {
        console.log(error);
    }

  return (
    <>
          <h1>Все аниме:</h1>
          {data && data.allAnimes.map((el) => {
              return (
                  <CardWithImg key={el.id} id={el.id} creatorName={el.creator} __typename={el.category} name={el.name}
                    description={el.description} dateOfPublic={el.dateOfPublic} />
              )
          })}
    </>
  )
}
