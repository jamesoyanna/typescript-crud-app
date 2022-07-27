import express, { Express } from 'express'
import mongoose  from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
require('dotenv').config()
const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.json());
app.use(todoRoutes)

const uri: string  = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.qwaoo.mongodb.net/?retryWrites=true&w=majority`

mongoose
.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
//  as ConnectOptions)
.then(() => {
  console.log(
    'Connected to Distribution API Database - Initial Connection'
  );
})
.catch((err) => {
  console.log(
    `Initial Distribution API Database connection error occured -`,
    err
  );
});

      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
      })