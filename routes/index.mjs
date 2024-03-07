import express from 'express'
import users from './users.mjs'
import orders from './orders.mjs'
const router = express.Router()
    

router.use('/users', users)
router.use('/orders', orders)

export default router