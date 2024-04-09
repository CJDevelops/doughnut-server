require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express');
const pool = require(__dirname + "/db.config.js");
const app = express();

const PORT = process.env.PORT || 9000;

// Get Functions
const getCategories = (req, res) => {
    pool.query("SELECT * FROM categories", (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const getSubcategories = (req, res) => {
    pool.query("SELECT * FROM subcategories", (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const getCurrencies = (req, res) => {
    pool.query("SELECT * FROM currencies", (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const getTags = (req, res) => {
    pool.query("SELECT * FROM tags", (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const getTransactions = (req, res) => {
    pool.query("SELECT * FROM transactions ORDER BY transaction_date ASC", (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const getUsers = (req, res) => {
    pool.query("SELECT * FROM users", (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

// Routes
app.get("/categories", getCategories)
app.get("/subcategories", getSubcategories)
app.get("/currencies", getCurrencies)
app.get("/tags", getTags)
app.get("/transactions", getTransactions)
app.get("/users", getUsers)

app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
})