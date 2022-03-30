const updateProduct = require('./updateProducts');
const getAll = require('./getAll');

const updateById = async ({ id, name, price }) => {
    const products = await getAll();
    const indexUpdateProduct = products.findIndex(item => item.id === id);

    if (indexUpdateProduct === -1) {
        return null;
    };

    products[indexUpdateProduct] = { id, name, price };

    await updateProduct(products)

    return products[indexUpdateProduct];
}

module.exports = updateById; 