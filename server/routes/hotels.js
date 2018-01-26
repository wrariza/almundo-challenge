import { Router } from 'express'
import  hotels from './../data/data.json'
import _ from 'lodash'

const hotelsRouter = Router()

hotelsRouter.get('/hotels', (req, res) => {
  let data = []
  let query = req.query
  let name = req.name
  let stars = query.stars

  _.each(hotels, (hotel) => {
    if ((stars.indexOf(hotel.stars) !== -1)) {
      data.push(hotel)
    }
  })

  console.log(data)
  res.status(200).json(data)
  res.end()
})

export default hotelsRouter
