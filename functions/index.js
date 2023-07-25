const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
// App config
const app = express();

// middlewares

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	//   console.log('payment request reacievd for this amount' >>> total)
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total),
			currency: "usd",
		});

		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
		response.send("try again");
	}
});

app.listen(5000, (err) => {
	if (err) {
		console.log(err.message);
	} else {
		console.log(`Server is running on port 5000`);
	}
});
