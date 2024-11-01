class Rol{
    static tableName='rol';

    constructor(id, nombre, descripcion){
        this.id=id;
        this.nnombre=nombre;
        this.descripcion=descripcion;
    }
}

module.exports=Rol;