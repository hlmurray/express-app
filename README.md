# express-app

This express app demonstrates adding/removing entries ('Case Studies') from the database.


## Install Dependencies
Once you have cloned this repo, install the dependencies.

```
npm install
```

## Run MongoDB and Mongo
The MongoDB data is stored in db.js. I created an account with MongoLab nd will be using my credentials for this project. To change this, open up db.js and change this line to follow this format:
```
mongoose.connect('mongodb://username:password@host:port/database');
```

## Start Node Server
Go back to your initial terminal tab where you installed the node dependencies, and start the node server:
```
npm start
```

Open your browser and head to [http://localhost:3000/form](http://localhost:3000/form) to play around!
