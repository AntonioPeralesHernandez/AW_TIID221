let productos = [
    {id: 1, nombre: "Café Americano", precio: 40, categoria: "bebida"},
    {id: 2, nombre: "Café Italiano", precio: 45, categoria: "bebida"},
    {id: 3, nombre: "Pan de muertos", precio: 15, categoria: "postre"}
];

function agregar(nombre, precio, categoria){
    productos.push({
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
        categoria: categoria
    });
}

function editar(id, nombre, precio, categoria){
    let producto = productos.find(p => p.id === id);

    if(producto){
        producto.nombre = nombre;
        producto.precio = precio;
        producto.categoria = categoria;
    }
}

function eliminar(id){
    productos = productos.filter(p => p.id !== id);
}

function listar(){
    console.log("\n---PRODUCTOS---");

    productos.forEach(p => {
        console.log(
            `ID: ${p.id} | Nombre: ${p.nombre} | Precio: ${p.precio} | Categoría: ${p.categoria}`
        );
    });
}

// Buscar productos usando filter()
function buscarProductos(tipo){
    let resultado;

    if(tipo === "1"){
        resultado = productos.filter(p => p.precio <= 30);
        console.log("\n---PRODUCTOS BARATOS---");
    }
    else if(tipo === "2"){
        resultado = productos.filter(p => p.precio > 30);
        console.log("\n---PRODUCTOS CAROS---");
    }
    else if(tipo === "3"){
        resultado = productos.filter(p => p.categoria === "bebida");
        console.log("\n---BEBIDAS---");
    }
    else if(tipo === "4"){
        resultado = productos.filter(p => p.categoria === "postre");
        console.log("\n---POSTRES---");
    }

    if(resultado){
        resultado.forEach(p => {
            console.log(
                `ID: ${p.id} | Nombre: ${p.nombre} | Precio: ${p.precio} | Categoría: ${p.categoria}`
            );
        });
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`
1. Agregar producto
2. Editar producto
3. Eliminar producto
4. Listar productos
5. Buscar productos
6. Salir

Selecciona una opción: `, opcion => {

    if (opcion === "1"){
        readline.question("Nombre: ", nombre =>
        readline.question("Precio: ", precio =>
        readline.question("Categoría (bebida/postre): ", categoria => {
            agregar(nombre, Number(precio), categoria);
            listar();
            readline.close();
        })));
    }

    else if (opcion === "2"){
        readline.question("ID: ", id => 
        readline.question("Nombre: ", nombre =>
        readline.question("Precio: ", precio =>
        readline.question("Categoría: ", categoria => {
            editar(Number(id), nombre, Number(precio), categoria);
            listar();
            readline.close();
        }))));
    }

    else if (opcion === "3"){
        readline.question("ID: ", id => {
            eliminar(Number(id));
            listar();
            readline.close();
        });
    }

    else if (opcion === "4"){
        listar();
        readline.close();
    }

    else if (opcion === "5"){
        readline.question(`
1. Productos baratos
2. Productos caros
3. Bebidas
4. Postres

Selecciona qué quieres buscar: `, tipo => {
            buscarProductos(tipo);
            readline.close();
        });
    }

    else if (opcion === "6"){
        readline.close();
    }
});