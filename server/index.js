require('dotenv').config();

const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/mainResolver')
const isEmail = require('isemail');


const Anime = [
    {id: "1",
        creator: ' Харука Томацу',
        name: 'Кёко Хори',
        category: 'Школа, Романтика',
        description: 'Дома Кёко носит обычную и простую одежду, такую как простые футболки, легинсы или джинсы. Она собирает волосы в хвост и иногда закрепляет шпильками. При готовке надевает фартук.',
        rate: '4.52',
        dateOfPublic: '28.06.2022'},
    {id: "2",
        creator: 'Кэнтаро Ябуки',
        name: 'Zero two или Любимый во Франксе',
        category: 'Романтика, что-то нереальное',
        description: 'лавная героиня. Загадочная девушка с красными рогами и необычным характером. Имеет прозвище «Убийца Напарников», за что Зеро опасаются многие пилоты.',
        rate: '5',
        dateOfPublic: '29.06.2022'}
]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () =>( {
    DataBase: Anime
  })
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});