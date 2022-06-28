module.exports = {
    Query: {
        allAnimes: async (parent, {pageSize = 2}, context, info) => {
            return context.DataBase.slice(0, pageSize)
        },
        findAnime: async (parent, { id }, context, info) => {
            return context.DataBase.find(el => el.id === id)
        }
    },
    Mutation: {
        addAnime: async (parent, {anime}, context, info) => {
            context.DataBase.push(anime)
            return anime
        }
    }
}