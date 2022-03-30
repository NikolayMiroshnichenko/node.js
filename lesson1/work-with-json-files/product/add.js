const { v4 } = require("uuid");
const getAll = require("./getAll");
const updateProducts = require("./updateProducts")

const add = async ({ name, price }) => {
    const newProduct = { name, price, id: v4() };
    const products = await getAll();
    products.push(newProduct);

    await updateProducts(products);
    return newProduct;
};

module.exports = add;