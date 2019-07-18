const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const port = process.env.Port || 4000;

mongoose.connect('mongodb+srv://jethro:jethro@cluster0-nir07.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection.once('open', () =>{
    console.log('MongoDB Connected');
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port,() => {
    console.log(`Currently listening to requests on ${port}`)
});

