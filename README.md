# api-skeleton

This project is made to provide a simple API Skeleton fast to deploy.

## Stack

- Node.js
- Express.js
- PostgreSQL
- Sqitch

## How to use ?

First clone this repository and install dependencies :

```bash
npm i
```

Then you need to connect to your own postgreSQL databse. Create .env file and use the .env.example file to add your own config : 

```bash
PORT=3000

PGHOST='host'
PGUSER='POSTGRES USER'
PGDATABASE="DATABASE NAME"
PGPASSWORD='PASSWORD'
PGPORT= POSTGRES PORT

API_DOCUMENTATION_ROUTE=/docs
CORS_DOMAINS=
```

Still 2 things to do :

- create some routes
- config associations

### Adding routes

Into app folder you can find router folder than countain all your routes.
First, you can edit the index.js file into the router/api folder.

IMPORTANT : you have to use speciic naming for your routes. They should have the same name that your database relations names.

For example, if you have a database with 2 raltion : 

- posts
- categories

For your routes you should use : 
```javascript
router.get("/posts", controllerHandler(coreController.getAll));
router.get("/categories", controllerHandler(coreController.getAll));
```

Into the coreController you have 5 methods : 

- getAll => Return all the entrie for a specific table with associations
- getByPk => Return a specific entry from the table matching by Primary Key
- create // note created at this time
- update // note created at this time
- delete // note created at this time

use these methods for the different kind of routes : 

- GET
- POST
- UPDATE
- DELETE

### Create relation between table

If you have some association between table, you need to explain it at the app.

Its pretty simple, into de services folder open the associationsConfig files.

You find an object that contain a key "relation". This is where you have to config relation.

Ex: if you have a "posts" relation countaining foreign key on categories relation through a categories_id column you have to edit the relation object like following : 

```javascript
relation: {
      posts: {
        column: "categories_id",
        fk: "categories.id",
        tableAssociation: "categories"
      }
    },
```

## start server

Last step, start the server with : 

```bash
npm run dev
```