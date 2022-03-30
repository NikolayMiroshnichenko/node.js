const fs = require("fs").promises;
const productPath = require("./productPath");

const getAll = async () => {
    const products = await fs.readFile(productPath);
    return JSON.parse(products);
};

module.exports = getAll;

/*
    Пример с __dirname - Полный путь к файлу
        console.log(__dirname)  
        Пример: D:\Node.js\lesson1\work-with-json-files\product 
    Пример как использовать: 
        const products = await fs.readFile(`${__dirname}/product.json`, 'utf-8');

    ////////////////////////////////////////////////////////////////////////////////

    Пример пакетом path:
        Преимущество не допускает недопустимых символов, и решает проблему с слешом 
    Пример как использовать:
        const productPath = path.join(__dirname, "product.json");
*/