const express=require("express");
const usuarioRutas = require("./rutas/rutasProductos")

const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/", usuarioRutas); // cada que usamos un .use es un midelware

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
    
})