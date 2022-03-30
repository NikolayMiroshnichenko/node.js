const getAll = require('./getAll');
const updateProducts = require('./updateProducts');

const removeById = async (id) => {
    const products = await getAll();
    const idx = products.findIndex(item => item.id === id);

    if (idx === -1) {
        return null;
    }

    // Удаляем с масива с помощю filter
    // const newProducts = products.filter((_, indexItem) => indexItem !== idx);
    // await updateProducts(newProducts);

    // Удаляем с масива с помощю splice
    const removeProducts = products.splice(idx, 1);
    await updateProducts(products);

    return removeProducts;
};

module.exports = removeById; 