console.log("");
console.log("INICIANDO EL SERVIDOR DE NODE.JS        ......................");

const http = require('http');

const direccionIP = '127.0.0.1';
const puerto = 3000;

// RESPUESTA DEL SERVIDOR
const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

//MAIN DEL SERVIDOR
servidor.listen(puerto, direccionIP, function(){
	console.log("");
	console.log("SE HA LEVANTADO UN SERVIDOR "+direccionIP+" EN EL PUERTO: " +puerto+ "")
	console.log("ABRE TU NAVEGADOR EN LA PAGINA http://"+direccionIP+":"+puerto);
});
