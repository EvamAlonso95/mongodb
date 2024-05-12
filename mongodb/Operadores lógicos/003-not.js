db.productos.find(
    {
        $not:

        {
            producto: "producto 1"
        }

    }
);