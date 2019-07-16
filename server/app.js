const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const port = process.env.Port || 4000;

app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(port,() =>{
    console.log(`Currently listening to requests on ${port}`)
});