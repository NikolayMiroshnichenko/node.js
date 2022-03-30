const fs = require('fs').promises;

// async/await
const fileOperation = async (action, filePath, textData) => {
    switch (action) {
        case 'read':
            // fs.readFile(filePath) по умолчанию возвращает буффер 
            // 2 способа конвектировать с буфера

            // 1 способ
            // const data = await fs.readFile(filePath); // Возращается буффер
            // const text = data.toString()
            // console.log(text);

            //2 способ 
            const data = await fs.readFile(filePath, 'utf-8');
            console.log(data);

            break;
        case 'add':
            const result = await fs.appendFile(filePath, textData);
            console.log(result); // Файл дописан но метод appendFile/writeFile возвращает undefined  

            break;
        case 'replace':
            await fs.writeFile(filePath, textData);
            break;

        default:
            console.log('Я не знаю чо делать с этим action ')
    }
}

const filePath = 'files/text.txt';
const textData = 'Добавили текст!';
const replaceText = 'Перезаписали файл';

// fileOperation('read', filePath);
// fileOperation('add', filePath, `\n${textData}`);
// fileOperation('replace', filePath, replaceText);