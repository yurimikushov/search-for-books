# Search for books

I was inspired to implement this app by a test assignment, that I found on the Internet. This one you can see a little below.

I haven't implementated a some requirements, but I have implemented an another features, that I made up by myself.

## Statement	

Implement an app for searching books with adaptive layout.

### Requirements

The app must have a search bar for typing a book title and a search button next to a search bar.

A snippet list of a found books must be displayed under a search bar. A snippet of found book must be contained a book cover, a title and an author name.

The app must display a more info about a found book (a scaled book cover, a title, an author name, a publishing date, a publisher name and ISBN code) in a modal window after any click on a snippet of a found book.

### Особенности

Приложение должно быть одностраничным.
Спустя секунду после ввода последнего символа текста в поисковую строку должен автоматически стартовать поиск книг. Если в течение секунды пользователь вводит дополнительный символ, таймер должен сбрасываться.
Верстка должна «растягиваться» от мобильных экранов до больших мониторов.
Все запросы с клиента должны идти в API Open Library.
Приложение должно быть написано на React + Redux.
Сборка должна осуществляться через webpack командой npm run build.
Запрещено использовать сторонние UI-библиотеки, например, Twitter Bootstrap.

### API

Для получения данных о книгах используйте [API Open Library](https://openlibrary.org/developers/api).

Для поиска книг используйте [Search API](https://openlibrary.org/dev/docs/api/search).

Идентификатор обложки книги приходит в ответе поиска. Для получения обложки книги используйте [Cover API](https://openlibrary.org/dev/docs/api/covers).

### Дополнительная информация

Дизайн придумайте самостоятельно — чувство прекрасного пойдет в зачет. Будет бонусом использование TS и инструментов статического анализа кода. Остальные детали, которых не хватает в задаче, выберите на свое усмотрение.
