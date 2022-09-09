# api-skeleton

This project is made to provide a simple API Skeleton fast to deploy.

You can use your own database and follow next steps, or if you just want try you can use information [here](database.md) to seed a DB example working with this app. And after go back here to follow steps behind.

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

For example, if you have a database with 2 relations :

- restaurant
- manager

For your routes you should use :
```javascript
router.get("/restaurant", controllerHandler(coreController.getAll));
router.get("/manager", controllerHandler(coreController.getAll));
```

Into the coreController you have 5 methods : 

- getAll => Return all the entries for a specific table with associations
- getByPk => Return a specific entry from the table matching by Primary Key
- create => Create a new entry into a specific relation
- update => Modifying by PK an entry into a table
- delete => delete an entry base on is PK. Be carreful to relations with association not set with DELETE ON CASCADE

Use these methods for the different kind of routes :

- GET
- POST
- UPDATE
- DELETE

### Create relation between table

If you have some association between table, you need to explain it at the app.

It's pretty simple, into de helpers folder open the paramsConfigurator.js files.

You find an object that contain a key "relation". This is where you have to config relation.

Ex: if you have a "restaurant" relation containing foreigns keys on "manager" relation through a manager_id column and "city" relation through à city_id column you have to edit the relation object like following :

```javascript
relation: {
    // put here your differents associations
    restaurant: [
      {
        fk: "manager_id",
        tableAssociation: "manager",
        column: "manager.id"
      },
      {
        fk: "city_id",
        tableAssociation: "city",
        column: "city.id"
      }
    ]
  },
```

## start server

Last step, start the server with :

```bash
npm run dev
```
