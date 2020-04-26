const express = require("express");
const graphqlHTTP = require('express-graphql');
const schema = require( "./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
// connect mongoDB
mongoose.connect('mongodb+srv://akp:mongodb2020@god-cchw4.mongodb.net/Books?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => console.log('MongoDB connected '+ res.data))
.catch((err) => console.error('MongoDB error '+ err));
/*const db = mongoose.connection;
db.on('error', (error) => console.log('AKP MongoDB error ')+ error);
db.once('open', () => {
  console.log('MongoDB connected !!!');
});
*/
//ends
app.use(cors());

app.use('/g', graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(4000, ()=>{
	console.log('hello');
});