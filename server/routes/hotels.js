import { Router } from 'express'
import  hotels from './../data/data.json'

const hotelsRouter = Router()

hotelsRouter.get('/hotels', (req, res) => {
  res.status(200).json(hotels)
  res.end()
})

export default hotelsRouter
