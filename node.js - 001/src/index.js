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

	});
// tipo de masa
app.get('/api/tipoMasa', (req, res) => {
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		if(err) throw err;
		let retorno = [];
		for(let i=0; i<tablas.length;i++){
			if(tablas[i].name == 'tipoMasa'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					if(err) throw err;
					let retorno = info;
					res.json(retorno);
				});
			}
		}
	});
});
app.get('/api/tipoMasa/:id', (req, res) => {
	let retorno = [];
	const { id } = req.params;
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		for(let i = 0; i < tablas.length; i++){
			if(tablas[i].name == 'tipoMasa'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					for(let j = 0; j < info.length; j++){
						if(info[j].id == id){
							retorno = info[j];
							res.json(retorno);
						}
					}
				});
			}
		}
		if(retorno.length == 0) res.json(retorno);
	});
});
//sabor de masa
app.get('/api/saborMasa', (req, res) => {
	mongoose.connection.db.listCollections().toArray(async(err, tablas) => {
		if(err) throw err;
		let retorno = [];
		for(let i=0; i<tablas.length;i++){
			if(tablas[i].name == 'saborMasa'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					if(err) throw err;
					let retorno = info;
					res.json(retorno);
				});
			}
		}
	});
});
app.get('/api/saborMasa/:id', (req, res) => {
	let retorno = [];
	const { id } = req.params;
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		for(let i = 0; i < tablas.length; i++){
			if(tablas[i].name == 'saborMasa'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					for(let j = 0; j < info.length; j++){
						if(info[j].id == id){
							retorno = info[j];
							res.json(retorno);
						}
					}
				});
			}
		}
		if(retorno.length == 0) res.json(retorno);
	});
});
// Cobertura
app.get('/api/cobertura', (req, res) => {
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		if(err) throw err;
		let retorno = [];
		for(let i=0; i<tablas.length;i++){
			if(tablas[i].name == 'cobertura'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					if(err) throw err;
					let retorno = info;
					res.json(retorno);
				});
			}
		}
	});
});
app.get('/api/cobertura/:id', (req, res) => {
	let retorno = [];
	const { id } = req.params;
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		for(let i = 0; i < tablas.length; i++){
			if(tablas[i].name == 'cobertura'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					for(let j = 0; j < info.length; j++){
						if(info[j].id == id){
							retorno = info[j];
							res.json(retorno);
						}
					}
				});
			}
		}
		if(retorno.length == 0) res.json(retorno);
	});
});
// hora
app.get('/api/hora', (req, res) => {
	mongoose.connection.db.listCollections().toArray(async(err, tablas) => {
		if(err) throw err;
		let retorno = [];
		for(let i=0; i<tablas.length;i++){
			if(tablas[i].name == 'hora'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					if(err) throw err;
					let retorno = info;
					res.json(retorno);
				});
			}
		}
	});
});
app.get('/api/hora/:id', (req, res) => {
	let retorno = [];
	const { id } = req.params;
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		for(let i = 0; i < tablas.length; i++){
			if(tablas[i].name == 'hora'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					for(let j = 0; j < info.length; j++){
						if(info[j].id == id){
							retorno = info[j];
							res.json(retorno);
						}
					}
				});
			}
		}
		if(retorno.length == 0) res.json(retorno);
	});
});
//tamaño
app.get('/api/tamano', (req, res) => {
	mongoose.connection.db.listCollections().toArray(async(err, tablas) => {
		if(err) throw err;
		let retorno = [];
		for(let i=0; i<tablas.length;i++){
			if(tablas[i].name == 'tamano'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					if(err) throw err;
					let retorno = info;
					res.json(retorno);
				});
			}
		}
	});
});
app.get('/api/tamano/:id', (req, res) => {
	let retorno = [];
	const { id } = req.params;
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		for(let i = 0; i < tablas.length; i++){
			if(tablas[i].name == 'tamano'){
				mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
					for(let j = 0; j < info.length; j++){
						if(info[j].id == id){
							retorno = info[j];
							res.json(retorno);
						}
					}
				});
			}
		}
		if(retorno.length == 0) res.json(retorno);
	});
});
// Ejecución del servidor
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
