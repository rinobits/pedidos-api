// Librerías
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Asignación puerto
const port = 3000;
process.env.URLDB ="mongodb+srv://rinobitsadmin:Nothing123@cluster0-xhhpf.mongodb.net/test?retryWrites=true&w=majority"
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

mongoose.connect(process.env.URLDB, {useUnifiedTopology:true,useNewUrlParser:true},
	(err, res) => { 
		if(err) throw err;
		console.log('Online Database... ');
		mongoose.connection.db.listCollections().toArray(async(err, tablas) => {
			if(err) throw err;
			var col = new Array();
			for(let i=0; i<6;i++){
				if(tablas[i].name != 'pedidos'){
					mongoose.connection.collection(tablas[i].name).find({}).toArray(async(err, info) => {
						if(err) throw err;
							col.push(info);
					});
				}
			}
			setTimeout(()=>{
				const jsonData = col;
				module.exports = jsonData;
			}, 3000);
		});

	});
// Rutas, se ejecutará después de la carga de la BD
setTimeout(() => {
/* 
	(!) tipo de masa ${id} = Tm1, Tm2, Tm3, Tm4
	(!) sabor de la masa ${id} = sm1, sm2, sm3
	(!) tamaño ${id} = tmn1, tmn2, tmn3, tmn4
	(!) hora de entrega ${id} = h1, ..., h21
	(!) cobertura ${id} = c1, c2, c3, c4
*/
	let names = ['tipoMasa', 'saborMasa', 'hora', 'cobertura', 'tamano'];
	let ids = ['Tm', 'sm', 'h', 'c', 'tmn'];
	let j = 0;
	for(let name of names){
		id = ids[j];
		app.get(`/api/${name}`, (req, res) => {
			const jsonData = require('./index.js');
			let retorno = [];
			for(let i = 0; i < jsonData.length; i++){
				if(retorno.length > 0) break;
				if(jsonData[i][0].id.includes(id)){
					retorno = jsonData[i];
					break;
				}
			}
			res.json(retorno);
		});
		j++;
		app.get(`/api/${name}/:id`, (req, res) => {
			const jsonData = require('./index.js');
			let retorno = [];
			const { id } = req.params;
			for(let i = 0; i < jsonData.length; i++){
				if(retorno.length > 0) break;
				for(let j = 0; j < jsonData[i].length;j++){
					if(jsonData[i][j].id == id){
						retorno = jsonData[i][j];
						break;
					}
				}
			}
			res.json(retorno);
		});
	}
	console.log("API READY");
}, 4000);


// Ejecución del servidor

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});