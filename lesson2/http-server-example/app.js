const http = require("http");

/* 
    request - обьект, описующий весь запрос 
    responsce - обьект, описующий весь ответ
*/

const server = http.createServer((request, response) => {
    const { url } = request;

    if (url === "/") {
        response.write("<h2>Home Page</h2>")
    } else if (url === "/about") {
        response.write("<h2>About Page</h2>")
    } else {
        response.write("<h2>Not found</h2>")
    }

    response.end();
})


server.listen(8000, () => {
    console.log("Сервер запущен!")
});

