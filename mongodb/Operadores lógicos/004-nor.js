db.productos.find(
    {
        $nor: [
            {
                precio: 55
            },
            {
                nombre: "producto 1"
            }
        ]
    }
);