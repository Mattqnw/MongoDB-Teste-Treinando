const mongoose = require("mongoose")


//configurando o mongoose
/*evitar alguns erros bobos com o "Promise" na hora da conexão da aplicação */ 
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/treinando", {
 /*evitar alguns erros bobos com useMongoClient: true */ 
  useMongoClient: true
}).then(function(){
console.log("MongoDB Conectado..")
}).catch(function(erro){

    console.log("Houve um erro ao se conectar ao MongoDB"+erro)
})

//model - Usuários e configurando.
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    Sobrenome: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    idade: {
        type:Number,
        require:true
    }
})

//Collection 
// O Collection é igual a tabela no mysql. Contudo, onde se cria o modelo para armazenar os campos acima.
mongoose.model('usuarios', UsuarioSchema)

//Inserindo dados do usuário no MongoDB
const usernew = mongoose.model('usuarios')

new usernew({
    nome: "vinicius",
    Sobrenome: "silva",
    email: "viniteste@email.com",
    idade: 27
}).save().then(function(){
    console.log("Usuário criado com sucesso!")
}).catch(function(erro){
    console.log("Erro ao registrar o usurário: "+erro)
})