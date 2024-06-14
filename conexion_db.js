const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario_mysql',
    password: 'tu_contrasena_mysql',
    database: 'ejemplo_db'
});

conexion.connect((error) => {
    if (error) {
    console.error('Error al conectar a la base de datos: ',error);
    return;
    }
    console.log('Conexion a la base de datos exitosa!');
});


// Realizar una consulta para obtener todos los usuarios de la tabla usuarios
conexion.query('SELECT * FROM usuarios', (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      return;
    }
    console.log('Resulatados de la consulta', resultados);
    
    // Cerrar la conexión
    conexion.end((err) => {
      if (err) {
        console.error('Error cerrando la conexión:', err);
        return;
      }
      console.log('Conexión cerrada');
    });
  });
