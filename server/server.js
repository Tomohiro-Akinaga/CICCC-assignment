const express = require("express");
const app = express();
const Product = require("./model/Product");

const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 8080;
app.listen(PORT, console.log("server is ready"));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB is ready"))
    .catch((err) => console.log(err));

app.use(express.json());

app.post("/", async (req, res) => {
    try {
        const newProduct = await new Product({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
        });
        const product = await newProduct.save();
        return res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get("/api/products", async (req, res) => {
    try {
        const response = await Product.find({});
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
});
