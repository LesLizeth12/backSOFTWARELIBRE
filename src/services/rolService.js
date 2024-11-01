const rolRepository = require('../repositories/rolRepository');
//const userRepository = require('../repositories/userRepository');

class RolService{
    getAllRols(){
        return rolRepository.findAll();
    }

    getRolById(id){
        return rolRepository.findById(id);
    }

    createRol(userData){
        return rolRepository.create(userData);
    }

    updateRol(id, userData){
        return rolRepository.update(id, userData);
    }

    deleteRol(id){
        return rolRepository.delete(id);
    }

    async getUsersByRole(rolId){
        const rol=await rolRepository.findById(rolId);
        if(!rol){
            throw new Error('Rol not found');
            return;
        }
        const users=await rolRepository.findUsersByIdRol(rolId);
        const userbyrol={
            data:{
                ...rol,
                usuarios:users
            }
        }
        return userbyrol;
    }
}
module.exports = new RolService();