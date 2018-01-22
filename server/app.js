'use strict'

import express from 'express'
import Debug from 'debug'
import path from 'path';
 
import { hotels } from './routes/'

const debug = new Debug('almundo:root')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS')
    next()
  })
}

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Run server almundo')
})

app.use('/img',express.static(path.join(__dirname, 'public/images')));
app.use('/api', hotels)

app.listen(PORT, () => {
  debug(`http://localhost:${PORT}`)
})
