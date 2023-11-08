# API Endpoints

This documentation provides an overview of the available endpoints for our API. Use these endpoints to interact with our system.

## Add a Book

- **Endpoint**: `/AddData`
- **HTTP Method**: POST
- **Description**: Add a new book to the database.

### Request

```http
POST /AddData
Content-Type: application/json
json
Copy code
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summury": this is a description about this book
}
Response
200 OK: Book successfully added to the database.
400 Bad Request: Invalid input or missing data.
View All Books
Endpoint: /ViewBooks
HTTP Method: GET
Description: Retrieve a list of all books in the database.
Request
http
Copy code
GET /ViewBooks
Response
200 OK: List of books in JSON format.
404 Not Found: No books found in the database.
View Book by ID
Endpoint: /ViewBookById
HTTP Method: GET
Description: Retrieve book details by its unique ID.
Request
http
Copy code
GET /ViewBookById?id=123
Response
200 OK: Book details in JSON format.
404 Not Found: Book with the specified ID not found.
Update a Book
Endpoint: /UpdateBook
HTTP Method: PUT
Description: Update an existing book in the database.
Request
http
Copy code
PUT /UpdateBook
Content-Type: application/json
json
Copy code
{
  "id": 123,
  "title": "Revised Title",
  "author": "Updated Author",
  "summury": this is a description about this book
}
Response
200 OK: Book successfully updated.
404 Not Found: Book with the specified ID not found.
400 Bad Request: Invalid input or missing data.
Delete a Book
Endpoint: /DeleteBook
HTTP Method: DELETE
Description: Delete a book from the database by its ID.
Request
http
Copy code
DELETE /DeleteBook?id=123
Response
200 OK: Book successfully deleted.
404 Not Found: Book with the specified ID not found.
