import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


import postRouts from './route/posts.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRouts);

const CONNECTION_URL = 'mongodb+srv://gabhishek:GAbhishekPassword@gabhishek01.dq23z80.mongodb.net/SocialMediaApp'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Our server is running on PORT: ${PORT}`)))
    .catch((error) => console.log(error.message))

