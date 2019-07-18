const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const port = process.env.Port || 4000;

mongoose.connect(keys.mongoURL, { useNewUrlParser: true });
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

