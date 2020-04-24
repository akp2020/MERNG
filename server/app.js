const express = require("express");
const graphqlHTTP = require('express-graphql');
const schema = require( "./schema/schema");
const mongoose = require("mongoose");

const app = express();
// connect mongoDB
mongoose.connect('mongodb+srv://akp:mongodb2020@god-cchw4.mongodb.net/Books?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log('db-#$0123$#connected ');
});


//ends

app.use('/g', graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(4000, ()=>{
	console.log('hello');
});