const { gql } = require("apollo-server");

const typeDefs = gql`

    """ Get all anime in DB """
    type Query {
        allAnimes(pageSize: Int):[Anime]!
        findAnime(id: ID!): Anime
    }

    type Mutation {
        # if false, signup failed -- check errors
        addAnime(anime: Animee!): Anime
    }

    type Anime {
        id: ID!
        creator: String
        name: String
        category: String
        description: String
        rate: Float
        dateOfPublic: String
    }

    input Animee {
        id: ID!
        creator: String
        name: String
        category: String
        description: String
        rate: Float
        dateOfPublic: String
    }
`

module.exports = typeDefs;