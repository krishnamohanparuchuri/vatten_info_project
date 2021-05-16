const Order = require('../../models/order.js')
const { generateOrderNr } = require('../../Lib/GenerateOrder.js')
const User = require('../../models/user')
const Company = require('../../models/company')
const Test = require('../../models/test')
const AuthMiddleware = require('../../Middleware/Auth.middleware')
const UserIsLoggedin = require('../../Middleware/User.middleware')
const CompanyIsLoggedin = require('../../Middleware/Company.middleware')

module.exports = function (router) {
    router.post('/order/private/generate', UserIsLoggedin.isUserLoggedIn, async (req, res) => {
        // console.log(req.body)
        const { orderAmount, id } = req.body
        const newTests = req.body.orderTests.map(test => test)
        let userRole = ''

        const FindUser = await User.findById({ _id: id })
        // console.log(FindUser)
        // console.log(newTests)

        userRole = FindUser.userRole
        const orderNumber = await generateOrderNr()

        let order = {}
        order.userRole = userRole
        order.orderNumber = orderNumber
        order.tests = newTests
        order.totalAmount = orderAmount
        order.userId = id

        // console.log(order)

        let newOrder = new Order(order)
        // console.log(newOrder)
        try {
            await newOrder.save()
            res.status(200).json({
                message: 'order is inserted', _id: newOrder._id,
                orderNumber: orderNumber
            })
        } catch (e) {
            res.status(500).json('unable to process the order')
        }
    })

    router.post('/order/company/generate', CompanyIsLoggedin.isCompanyLoggedIn, async (req, res) => {
        // console.log(req.body)
        const { orderAmount, id } = req.body
        const newTests = req.body.orderTests.map(test => test)
        let userRole = ''

        const FindUser = await Company.findById({ _id: id })
        // console.log(FindUser)
        // console.log(newTests)

        userRole = FindUser.userRole
        const orderNumber = await generateOrderNr()

        let order = {}
        order.userRole = userRole
        order.orderNumber = orderNumber
        order.tests = newTests
        order.totalAmount = orderAmount
        order.userId = id

        // console.log(order)

        let newOrder = new Order(order)
        // console.log(newOrder)
        try {
            await newOrder.save()
            res.status(200).json({
                message: 'order is inserted', _id: newOrder._id,
                orderNumber: orderNumber
            })
        } catch (e) {
            res.status(500).json('unable to process the order')
        }
    }),

        router.get('/orders', AuthMiddleware.isAdminLoggedIn, async (req, res) => {
            await Order.find({}).exec()
                .then(docs =>
                    res.status(200).json({
                        message: 'list of all orders',
                        orders: docs
                    }))
                .catch(err => res.status(500)
                    .json({
                        message: 'Error finding user',
                        error: err
                    }))
        })

    router.get('/order/:userId', UserIsLoggedin.isUserLoggedIn, async (req, res) => {
        if (req.id = req.params.userId) {

            await Order.find({ userId: req.params.userId }).exec()
                .then(docs =>
                    res.status(200).json({
                        message: 'list of all orders',
                        orders: docs
                    }))
                .catch(err => res.status(500)
                    .json({
                        message: 'Error finding user',
                        error: err
                    }))
        } else {
            res.status(400).json({
                message: 'Unvalid Credentials'
            })
        }
    })


}