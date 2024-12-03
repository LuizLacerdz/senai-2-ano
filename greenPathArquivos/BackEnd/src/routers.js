const express = require('express');
const client = require('../config/db');
const clientController = require('../controller/controller');
const router = express.Router();

router.get('/', clientController.getRoot); //Rota raiz

//* Green_Path
router.post('/api/loginprojeto', clientController.loginProjeto) //* Login projeto
router.post('/api/cadastroprojetoGreen', clientController.registerProjetoUser) //* Cadastro projeto
router.post('/api/resetsenhaprojetoGreen', clientController.resetPassworldProjeto) //*Resetar a senha projeto
router.post('/api/resetprojetoGreen', clientController.getEmailResetProjetoGreen) //*Ver se o email registrado está no Bando de Dados
router.post('/api/cadastrarcalendario', clientController.registerCalendar) //*Cadastro Calendario
router.delete('/api/deletarcalendario/:id', clientController.deletarIdAgenda) //*Deletar Calendario
router.put('/api/editarcalendario/:id', clientController.updateAgenda) //Editar Calendario
router.get('/api/listaragenda', clientController.getAllAgenda) //* Rota para listar
module.exports = router;


