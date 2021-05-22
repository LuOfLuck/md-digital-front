const getBook = async() => {
    try{
        const date = await fetch('https://www.etnassoft.com/api/v1/get/?any_tags=[html,css,javascript]&order=newest');
        const books = await date.json();
        const table = document.getElementById("table-books");

        books.forEach(book => {
            table.innerHTML += `
                <tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.language}</td>
                    <td>${book.publisher_date}</td>
                    <td><a href="${book.url_download}" target="_BLANK">Click me</a></td>
                </tr>
            `;
        });

    }catch(error){
        console.log(error);
    }
} 
getBook();
