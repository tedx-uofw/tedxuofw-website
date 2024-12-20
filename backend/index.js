const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: '.env.local' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// Use CORS middleware
// In production change this url to website url
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Middleware to parse JSON

app.post('/checkout', async (req, res) => {
    const { quantity, buyer } = req.body;
    const origin = req.headers.origin;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Pro Subscription',
                        },
                        unit_amount: 1000, // Price -> (1000 == 10.00$ , 2000 == 20.00$, etc.)
                    },
                    quantity: quantity,
                },
            ],
            mode: 'payment',
            customer_email: buyer.email,
            metadata: {
                customer_name: buyer.name,
            },
            success_url: `${origin}/success`, // Remove extra quotes
            cancel_url: `${origin}/checkout`, // Cancel redirect URL
        });

    
        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating Stripe session:', error.message);
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
