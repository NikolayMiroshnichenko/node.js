const productPath = require("./productPath");
const fs = require("fs").promises;

const updateProducts = async (products) => {
    await fs.writeFile(productPath, JSON.stringify(products, null, 2));
};

module.exports = updateProducts;

// Функция которая обновляет файл product.json