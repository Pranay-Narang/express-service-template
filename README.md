# ExpressJS Services Template

## Starting Development Server

* The development server uses nodemon to keep an instance running while actively looking for changes on the project and restarts the server automatically
```bash
$ npm run dev
```

## Starting Production Server

TODO

## Project Structure

```bash
- models/ - Should contain schemas and middlewares for the database interaction
- controllers/ - Should contain the business logic for the routes
- routes/ - Should contain the route handlers invoking the controllers
- middleware/ - Should contain any exportable middleware functions
```

## Environment Variables

* [example.env](example.env) contains the necessary values which need to be used
* Either use a `.env` file in the project root or export the specified values
* In the case of utilizing a new enviornment variable for the project
    * They need to be declared in [config.js](config/config.js) with an boilerplate value
    * Specified under [example.env](example.env) with an example value

## File Structure
Consider an example API called `users` for which we will use the below file structure

* ### routes
`users.route.js`
```javascript
const router = require('express').Router()

const controller = require('../controllers/users.controller')

router.get('/users', controller.read)
router.post('/users', controller.add)
// Insert route handlers here

module.exports = router
```

* ### models
`users.model.js`
```javascript
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', schema)

module.exports = User
```

* ### controllers
`users.controller.js`
```javascript
const model = require('../models/users.model')

const read = async (req, res) => {
    const users = await model.find({})
    res.send(users)
}

module.exports.read = read

const add = async (req, res) => {
    const user = new model(req.body)
    try {
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
}

module.exports.add = add
```

When creating a new API or adding a new endpoint to an existing one, it is advised to strictly follow the above mentioned structure along with REST API guidelines for having consistency across the codebase