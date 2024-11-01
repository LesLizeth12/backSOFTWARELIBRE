class User{
    static tableName='usuario';

    constructor(id, name, email,idRol){
        this.id=id;
        this.name=name;
        this.email=email;
        this.idRol=idRol;
    }
}

module.exports=User;