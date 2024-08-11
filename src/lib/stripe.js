"use server";

import Order from "@/models/Order";
import connect from "./database";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const PaymentMethod = async (body) => {
  try {
    console.log("Starting PaymentMethod function");
    console.log("Frontend URL:", process.env.NEXT_PUBLIC_FRONTEND_URL);
    console.log("Stripe API Key (last 4 chars):", process.env.STRIPE_SECRET_KEY.slice(-4));
    console.log("Order details:", { title: body.title, price: body.price });

    await connect();
    console.log("Database connected");

    const newOrder = await Order.create(body);
    console.log("New order created:", newOrder._id);

    const transformedItem = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: body.title,
          },
          unit_amount: body.price * 100,
        },
        quantity: 1,
      },
    ];

    console.log("Transformed item:", transformedItem);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: transformedItem,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/success/${newOrder._id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/cancel`,
    });

    console.log("Stripe session created:", session);

    if (session) {
      console.log("Session URL:", session.url);
      return session.url;
    } else {
      console.log("Session created but no URL returned");
      return null;
    }
  } catch (error) {
    console.error("Error in PaymentMethod:", error);
    throw error;
  }
};

// Example of how to use the PaymentMethod function
export const handlePayment = async (body) => {
  try {
    const url = await PaymentMethod(body);
    if (url) {
      console.log("Payment URL generated:", url);
      // Use the URL here (e.g., redirect the user)
      return url;
    } else {
      console.log("No URL returned from PaymentMethod");
      throw new Error("Failed to generate payment URL");
    }
  } catch (error) {
    console.error("Error in payment process:", error);
    // Handle the error (e.g., show an error message to the user)
    throw error;
  }
};