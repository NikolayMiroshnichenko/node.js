// Работа с JSON + Консольное приложение 
const productOperations = require('./product');
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const arrCommand = hideBin(process.argv); // Получаем массив только команд
const { argv } = yargs(arrCommand); // Получаем обьект команд

// !process.argv массив команд которые были введены в консоль и пути к файлу ноды локально 
// !yargs пакет для создания обьекта с масива process.argv, или использовать пакет commander


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
        case "updateById":
            const updateProduct = await productOperations.updateById({ name, price, id });
            console.log(updateProduct);
            break;
        case "removeById":
            const removeProduct = await productOperations.removeById(id);
            console.log(removeProduct);
            break;
        default:
            console.log('Не умею рабать с этим action');
    }
};

invokeAction(argv);

/*
    1. Получить все товары
    2. Получить один товар по id
    3. Добавить товар в список
    4. Обновить товар по id
    5. Удалить товар по id

*/

// invokeAction({ action: 'getAll' }); // Получить все

// invokeAction({ action: 'getById', id: '3' }); // Найти по id

// invokeAction({ action: 'add', name: "Груша", price: "400" }); // Добавить в масив

// invokeAction({ action: 'add', name: "Киви", price: "500" }); // Добавить в масив

// invokeAction({
//     action: 'updateById',
//     name: "Груша Обновленное Имя",
//     price: "500 Обновленноя цена",
//     id: "f124e5d3-5b4b-487f-9d73-c8ccc72f62a3"
// }); // Обновить продукт

// invokeAction({ action: "removeById", id: "2" }); // Удаляем по id




