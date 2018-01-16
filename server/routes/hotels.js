import { Router } from 'express'
import * as hotels from './../data/data.json'

const hotelsRouter = Router()

hotelsRouter.get('/hotels', (req, res) => {
  res.status(200).json(hotels)
})

export default hotelsRouter
