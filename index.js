import  express  from "express";
import cors from 'cors'
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import 'colors'
import pokemonRoutes from './routes/pokemonroutes.js'

dotenv.config()

const app = express()
app.use(cors())

app.use(express.json())

app.use('/api/pokemons', pokemonRoutes)

app.get('/', async (req, res) => {
  res.send('hollo from POKEMON')
})

const PORT = process?.env?.PORT || 5001;

mongoose.set('strictQuery', false)
mongoose.connect(process?.env?.CONNEXION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(PORT, console.log(`Server running on port: http://localhosts:${PORT}`.green.underline.italic))
  })
  .catch((err) => console.log(err.message.red))

 
// const startServer = async () => {
//   try {
//     connectDB(process?.env?.MONGODB_URL)
//     app.listen(8080, () => console.log("Server running on PORT  http://localhost:8080"))
//   } catch (err) {
//     console.log(err)
//   }
// }

// startServer();