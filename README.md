## Full books view Endpoint

- **HTTP Method**: GET
- **Endpoint URL**: `/ViewBooks`
- **Description**: Get a full datas of a books.
- **Response**:
  - `200 OK` - Book data in JSON format.
  - `401 Not Found` - data is not there.

**Example Usage**:

```http
GEThttp://localhost:3000/ViewBooks

