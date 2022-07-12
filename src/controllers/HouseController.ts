/* eslint-disable camelcase */
import { Request, Response } from 'express'

import House from '../schemas/House'

class HouseController {
  public async index (req: Request, res: Response): Promise<Response> {
    const { status } = req.query

    const houses = await House.find({ status })

    return res.json(houses)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { description, price, location, status } = req.body
    const { user_id } = req.headers

    const house = await House.create({
      user: user_id,
      description,
      price,
      location,
      status
    })

    return res.json(house)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { house_id } = req.params
    const { description, price, location, status } = req.body
    const { user_id } = req.headers

    await House.updateOne({ _id: house_id }, {
      user: user_id,
      description,
      price,
      location,
      status
    })

    return res.send({ message: 'House updated!' })
  }
}

export default new HouseController()
