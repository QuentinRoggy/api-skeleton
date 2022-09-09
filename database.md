# Database Instructions
If you want to use this project with the provided database, follow this steps.

## Create db
First you have do create a database named "resto".
You can do it manually with to command below (adjust with you own information);
```bash
psql -U postgres
```
```bash
CREATE USER you-user LOGIN PASSWORD 'your-password';
```
```bash
CREATE DATABASE resto OWNER your-user;
```

## Create .env file
Copy / Past the .env.example file and rename it .env
Then, inside modify the different PG variables with your own data

```bash
PORT=3000

PGHOST='host'
PGUSER='POSTGRES USER'
PGDATABASE='resto'
PGPASSWORD='PASSWORD'
PGPORT= POSTGRES PORT

API_DOCUMENTATION_ROUTE=/docs
CORS_DOMAINS=
```

## Create sqitch.conf file
Copy / Past the sqitch.conf.example file and rename it sqitch.conf
Then, inside modify it like that : 

```bash
[core]
	engine = pg
	top_dir = migrations
	# plan_file = migrations/sqitch.plan
[engine "pg"]
	target = db:pg:resto
	# registry = sqitch
	# client = psql
```

## Install dependencies
Run the following command to install dependencies
```bash
npm install
```

## Create an seed databse
Now we are ready to create all tables and add some entries inside.
Make sure to be into root folder of the app and run this command
```bash
npm run resetDB
```

Now you can follow instruction on [readme.md](README.md) directly on "add routes" section.