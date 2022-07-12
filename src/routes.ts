import { Router } from 'express'

import HouseController from './controllers/HouseController'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.post('/houses', HouseController.store)
routes.get('/houses', HouseController.index)
routes.put('/houses/:house_id', HouseController.update)

export default routes
