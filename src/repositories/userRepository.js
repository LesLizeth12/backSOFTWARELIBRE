const CrudRepository = require('../lib/crudRepository');
const User = require('../models/User');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}

module.exports = new UserRepository();