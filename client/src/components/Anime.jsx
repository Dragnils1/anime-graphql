import React, { useState } from 'react'
import {
    useQuery,
    gql
} from "@apollo/client";
import { useParams } from 'react-router-dom';
import CardWithImg from './Card/CardWithImg';

const AnimeQuery = gql`
  query Query($findAnimeId: ID!) {
    findAnime(id: $findAnimeId) {
        id
        creator
        name
        category
        description
    }
}
`;

export default function Anime() {

    let params = useParams();
    const { loading, error, data } = useQuery(AnimeQuery,
        { variables: { findAnimeId: params.animeId }}
    )

    if (loading) {
        return <p> Loading ... </p>
    }

    if (error) {
        return <p> Error : {error.message}</p>
    }

    return (
        <>
            <div>Аниме</div>
            
            {data && <CardWithImg key={data.findAnime.id} creatorName={data.findAnime.creator} __typename={data.findAnime.category} name={data.findAnime.name}
                description={data.findAnime.description} dateOfPublic={data.findAnime.dateOfPublic} />}
            
        </>
        
    )
}
