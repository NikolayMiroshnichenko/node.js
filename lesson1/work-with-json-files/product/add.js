const { v4 } = require("uuid");
const fs = require("fs").promises;
const productPath = require("./productPath");
const getAll = require("./getAll");

const add = async ({ name, price }) => {
    const newProduct = { name, price, id: v4() };
    const products = await getAll();
    products.push(newProduct);

    fs.writeFile(productPath, JSON.stringify(products, null, 2));
    return newProduct;
};

module.exports = add;