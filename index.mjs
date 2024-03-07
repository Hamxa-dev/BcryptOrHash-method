import express from 'express'
import connectDB from './config/db.mjs'
import routes from './routes/index.mjs'
const app = express()
const port = 3000;


app.listen(port, () => {
    console.log(`Server is running on port <a href="http://localhost:${port}">${port}</a>`);
});


app.use(express.json())

//GET, POST, PUT, DELETE
app.use('/', routes)
connectDB()