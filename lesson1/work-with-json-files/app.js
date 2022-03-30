/*
    1. Получить все товары 
    2. Получить один товар по id
    3. Добавить товар в список
    4. Обновить товар по id
    5. Удалить товар по id

*/

const productOperations = require('./product');

const invokeAction = async ({ action, id, name, price }) => {
    switch (action) {
        case "getAll":
            const products = await productOperations.getAll();
            console.log(products);
            break;
        case "getById":
            const product = await productOperations.getById(id);
            console.log(product);
            break;
        case "add":
            const newProduct = await productOperations.add({ name, price });
            console.log(newProduct)
            break;

        default:
            console.log('Не умею рабать с этим action');
    }
};

invokeAction({ action: 'getAll' });
// invokeAction({ action: 'getById', id: '3' });
// invokeAction({ action: 'add', name: "Груша", price: "400" });
// invokeAction({ action: 'add', name: "Киви", price: "500" });




