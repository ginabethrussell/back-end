# Build Week How-To Backend
[Product Vision Document](https://docs.google.com/document/d/11nPLXuvIIXRODc8R4q-oEy7gNkcC6ahP5cfVi1w_SOs/edit?usp=sharing)

## Marketing Landing Page Deployment
[https://tt88-how-to.netlify.app/](https://tt88-how-to.netlify.app/)

## Frontend React Page Deployment
[https://tt88-frontend-howto.netlify.app/](https://tt88-frontend-howto.netlify.app/)

## Backend Server Page Deployment:
[https://gbr-how-to.herokuapp.com/](https://gbr-how-to.herokuapp.com/)

### Server Routes
|Route | Action | Response |
|---|---|---|
|GET /| Requests server | Returns a server welcome message|
|GET /users | Requests users | Returns an array of users|
|GET /users/:id | Requests user | Returns a user|
|POST /users/login | Creates a new user| Returns an id and token |
|POST /users | Logs in registered user| Returns an id and token |
|GET /howtos | Requests howtos | Returns an array of howtos |
|POST /howtos | Adds a howto| Returns an array of howtos |
|PUT /howtos/:id | Updates a howto | Returns updated howto |
|DELETE /howtos/:id | Deletes a howto | Returns deleted howto |

### User Data
|Object key  | Value |
|---|---|
|id | An auto generated number identifying the user|
|username | A required string|
|password | A required string|

### How-To Data
|Object key  | Value |
|---|---|
|id | An auto generated number identifying the howto|
|creator_id | number identifying id of creator user|
|title | A required string|
|date | an auto generated string from Date.now()|
|author | string|
|paragraphs | array of strings|
