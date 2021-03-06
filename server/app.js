'use strict'

import express from 'express'
import Debug from 'debug'
import path from 'path'
import cors from 'cors'
import { hotels } from './routes/'

const debug = new Debug('almundo:root')

const app = express()

app.use(cors({origin: '*'}))

const PORT = process.env.PORT || 3001

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(process.cwd(), 'dist')))
}

app.use('/img', express.static(path.join(__dirname, 'public/images')));
app.use('/api', hotels)

app.listen(PORT, () => {
  debug(`http://localhost:${PORT}`)
})
