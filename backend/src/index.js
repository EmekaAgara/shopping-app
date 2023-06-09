const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./router/productRoutes');
const orderRoutes = require('./router/orderRoutes');
const paymentRoutes = require('./router/paymentRoutes');



const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/payments', paymentRoutes);
// app.use('/v2/online-checkout/payment-links', paymentRoutes);

app.get('/', (req, res) => {
    res.send('<h2>Hello world</h2>');
});


app.listen(PORT, () => {
    console.log('Api is listening on port', PORT)
})