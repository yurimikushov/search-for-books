# Search for books

I was inspired to implement this app by a test assignment, that I found on the Internet. This one you can see a little below.

I haven't implementated a some requirements, but I have implemented an another features, that I made up by myself.

## Statement	

Implement an app for searching books with adaptive layout.

### Requirements

The app must have a search bar for typing a book title and a search button next to a search bar.

A snippet list of a found books must be displayed under a search bar. A snippet of found book must be contained a book cover, a title and an author name.

The app must display a more info about a found book (a scaled book cover, a title, an author name, a publishing date, a publisher name and ISBN code) in a modal window after any click on a snippet of a found book.

### Peculiar properties

The app must be a SPA.
A book searching must get started automatically after a second after type a last letter of a search query. If a user types yet an one letter within a second, then the timer must get restarted.
A layout must adaptive for a mobile and desktop.
All search requests must call the API Open Library.
The app must be written on React + Redux.
A build must run on Webpack by `npm run build` command.
Prohibited to use a third party UI libraries, e.g. Twitter Bootstrap.

### API

Для получения данных о книгах используйте [API Open Library](https://openlibrary.org/developers/api).

Для поиска книг используйте [Search API](https://openlibrary.org/dev/docs/api/search).

Идентификатор обложки книги приходит в ответе поиска. Для получения обложки книги используйте [Cover API](https://openlibrary.org/dev/docs/api/covers).

### Дополнительная информация

Дизайн придумайте самостоятельно — чувство прекрасного пойдет в зачет. Будет бонусом использование TS и инструментов статического анализа кода. Остальные детали, которых не хватает в задаче, выберите на свое усмотрение.
