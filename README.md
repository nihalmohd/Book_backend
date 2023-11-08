## Full books view Endpoint

- **HTTP Method**: GET
- **Endpoint URL**: `/ViewBooks`
- **Description**: Get a full datas of a books.
- **Response**:
  - `200 OK` - Book data in JSON format.
  - `401 Not Found` - data is not there.

**Example Usage**:


## User Profile Endpoint

- **HTTP Method**: GET
- **Endpoint URL**: `ViewBookById?:_id`
- **Description**: Get a book by that id
- **Request Parameters**:
  - `_id` (URL parameter) - The unique ID of the user.
- **Response**:
  - `200 OK` - Book data in JSON format.
  - `404 Not Found` - data is not there.

```http
GEThttp://localhost:3000/
