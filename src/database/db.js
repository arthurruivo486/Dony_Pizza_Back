import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'dony',
  password: '123456',
  database: 'dony_pizza'
});


connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
    return;
  }
  console.log('MySQL conectado com sucesso!');
});

export default connection;
