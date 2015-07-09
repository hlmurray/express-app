# express-app

This express app demonstrates adding/removing entries ('Case Studies') from the database.


## Install Dependencies
Once you have cloned this repo, install the dependencies.

```
npm install
```

## Run MongoDB and Mongo
The MongoDB data are stored in the model/ directory. Open a new tab, navigate to the root directory, and run this command:
```
mongod --dbpath model/
```

Once you see '[initandlisten] waiting for connections on port 27017' in the terminal, you're good to go!

Open a new tab, navigate to the model/ and type:
```
mongo
```

Which will then open up a mongo console. Then run:
```
use express-app
```
*I saved this repo under express-app/ directory, which is referenced above.

Go back to your initial terminal tab where you installed the node dependencies, and start the node server:
```
npm start
```

Open your browser and head to [http://localhost:3000/form](http://localhost:3000/form) to play around!
