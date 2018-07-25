const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb://rane:password1@ds163711.mlab.com:63711/gql-ninja', { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('Connected to the db'));

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => console.log('Express is alive and listening'));