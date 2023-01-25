## JSON server

> Work in group to solve these tasks.

## Task 1

1. First, create a project directory.

```sh
$ mkdir json-server-demo
$ cd json-server-demo
$ npm init -y
```

2. Install `json-server` as a development dependency (only used during development) by executing the command:

```sh
npm install json-server --save-dev
```

3. Add a small addition to the scripts part of the `package.json` file. The `--watch` command is used to specify the data for the server.

```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "json-server -p3001 --watch users.json"
  },
 ...
}
```

> It is also possible to add scripts to `package.json` using the following command: `npm set-script dev "nodemon app.js"`

4. Create a file `users.json` and add the following content

```json
{
  "users": [
    {
      "id": 1,
      "first_name": "Robert",
      "last_name": "Schwartz",
      "email": "rob23@gmail.com"
    },
    {
      "id": 2,
      "first_name": "Lucy",
      "last_name": "Ballmer",
      "email": "lucyb56@gmail.com"
    },
    {
      "id": 3,
      "first_name": "Anna",
      "last_name": "Smith",
      "email": "annasmith23@gmail.com"
    },
    {
      "id": 4,
      "first_name": "Robert",
      "last_name": "Brown",
      "email": "bobbrown432@yahoo.com"
    },
    {
      "id": 5,
      "first_name": "Roger",
      "last_name": "Bacon",
      "email": "rogerbacon12@yahoo.com"
    }
  ]
}
```

5. We can now start the `json-server` from the project root directory with the command:

```sh
npm run server
```

6. Install [Postman](https://www.postman.com/downloads/) and test the end points below:

- Get GET - Read All users

```http
  GET http://localhost:3001/users
```

- Get GET - Read single user

```http
  GET http://localhost:3001/users/1
```

- POST - Create a user and verify that the user is created in the `users.json` file.

```http
  POST http://localhost:3001/users
```

```http
  Content-type: application/json
```

```json
{
  "first_name": "Matti",
  "last_name": "Seppänen",
  "email": "Matti@yahoo.com"
}
```

- PUT - Update user's data and verify that the user's data is updated in the `users.json` file.

```http
  PUT  http://localhost:3001/users/6
```

```http
  Content-type: application/json
```

```json
{
  "first_name": "Matti",
  "email": "Matti2@yahoo.com"
}
```

- POST - Create another user and verify that the user is created in the `users.json` file.

```http
  POST http://localhost:3001/users
```

```http
  Content-type: application/json
```

```json
{
  "first_name": "Mirja",
  "last_name": "Seppänen",
  "email": "Mirja@yahoo.com"
}
```

- DELETE - Delete a user and verify that the user's data is no longer in the `users.json` file.

```http
  POST http://localhost:3001/users/7
```

```http
  Content-type: application/json
```

<!-- 6. Install the REST client vscode extension and test all endpoints -->
<!-- 7. Test al the endpoints in `actions.rest` file -->

## Task 2

- What is `json-server`?
--> JSON Server is a Node Module that can be used to create demo rest json webservices. Min. needed is a JSON file for sample data.

- What are CRUD operations?
--> CRUD = create, read, update, and delete (CRUD) are basic operations of persistent storage. 

- What is the difference between PUT and PATCH?
--> PUT is a technique of altering resources when the client transmits data that revamps the whole resource. PATCH is a technique for transforming the resources when the client transmits partial data that will be updated without changing the whole data.

- What is the difference between `npm install json-server --save-dev` and `npm install json-server`?
--save-dev installs dependencies for development only whilst without --save-dev the dependency is used by the script by default.
