var rutas=require("express").Router();
//var {Router}=require("express"); esta linea es la misma que la de arriba y seria Router.get para la ruta

var {mostrarProductos,nuevoProducto,borrarProducto,buscarPorId}=require("../bd/productoBD")

rutas.get("/",async(req,res) =>{
   // res.send("Hola estas en la raiz")
   var productosValidos = await mostrarProductos(); //se usa la variable para reternerla en algun lado
   console.log(productosValidos);
   res.json(productosValidos);
   
});

rutas.get("/buscarPorId/:id",async(req,res)=>{
    var productosValidos = await buscarPorId(req.params.id);
    res.json(productosValidos);
});

rutas.post("/nuevoProducto",async(req,res)=>{
    var productoGuardado = await nuevoProducto(req.body);
    res.json(productoGuardado);
})

rutas.delete("/borrarProducto/:id",async(req,res)=>{
    var productoBorrado = await borrarProducto(req.params.id);
    res.json(productoBorrado);
})
module.exports=rutas;