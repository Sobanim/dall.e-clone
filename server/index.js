import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limit: '50mb'}))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
    res.send('Hello from DALL-e')
})

const startServer = async () => {
    try {
        console.log(process.env.MONGODB_URL)
        connectDB(process.env.MONGODB_URL)
        app.listen(3001, () => console.log('Server started! localhost:3001'))
    } catch (error) {
        console.error(error)
    }
}

startServer()