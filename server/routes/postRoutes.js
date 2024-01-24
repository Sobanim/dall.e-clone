import * as dotenv from 'dotenv'

import Post from '../mongodb/models/post.js'
import express from "express";

dotenv.config()

const router = express.Router()

export default router