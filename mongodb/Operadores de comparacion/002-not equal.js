db.productos.findOne({ precio: { $ne: 25 } });

db.productos.find({ precio: { $ne: 25 } });