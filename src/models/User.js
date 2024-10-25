class User{
    static tableName='usuario';

    constructor(id, name, email){
        this.id=id;
        this.name=name;
        this.email=email;
    }
}

module.exports=User;