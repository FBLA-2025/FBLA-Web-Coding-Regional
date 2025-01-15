// ./models/Products.js

const mongoose = require("mongoose");

const subscribedSchema = new mongoose.Schema(
    {

        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            trim: true,
        },
    });

module.exports = subscribedSchema;
