const userRepository = require('../repositories/userRepository');
const UserRepository=require('../repositories/userRepository');

class UserService{
    getAllUsers(){
        return UserRepository.findAll();
    }

    getUserById(id){
        return UserRepository.findById(id);
    }

    createUser(userData){
        return userRepository.create(userData);
    }

    updateUser(id, userData){
        return UserRepository.update(id, userData);
    }

    deleteUser(id){
        return UserRepository.delete(id);
    }
}

module.exports=new UserService();