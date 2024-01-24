import * as dotenv from 'dotenv'
import express from "express";

import {Configuration, OpenAIApi} from 'openai'

dotenv.config()

const router = express.Router()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

router.route('/').get((req, res) => {
    res.send('Hello From DALLE')
})

export default router