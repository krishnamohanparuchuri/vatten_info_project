require('dotenv').config()
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const YOUR_DOMAIN = 'http://localhost:8080';

const stripe_keys = {
    secret_key: process.env.STRIPE_SECRET_KEY,
    publishable_key: process.env.STRIPE_PUBLISHABLE_KEY
}
module.exports = function (router) {

    router.get('/stripe/config', async function (req, res, next) {
        const stripe_publishable_key = stripe_keys.publishable_key
        res.json({
            stripe_config: {
                publishableKey: stripe_publishable_key
            }
        })
    })
    router.post('/create-checkout-session', async (req, res) => {
        console.log(req.body)

        const { orderTests } = req.body
        console.log(orderTests)

        // let testsLists =[]
        const testsList = req.body.orderTests.map(test =>
            test
            //     {
            //     // price = test.price
            //     // quantity = test.quantity
            //     // testname = test.name
            // }
        )

        // console.log(testsList)
        // let cart_items = []
        // const testArrayList = orderTests.map((test) => {
        //     let data_object = {}
        //     data_object.price_data.currency = 'sek'
        //     data_object.price_data.product_data.name = test.testname
        //     data_object.price_data.unit_amount = test.price
        //     data_object.quantity = test.quantity
        //     return data_object

        // })
        // console.log(testArrayList)
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],

            line_items: testsList,
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/paymentSucess`,
            cancel_url: `${YOUR_DOMAIN}/paymentCancel`,
        });
        res.json({ id: session.id });
    });
}
