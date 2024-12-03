const clientController = require("../model/model.js");
const moment = require("moment");

const userController = {
  //Route root
  getRoot: async (req, res) => {
    res.status(200).json({ msg: "The API is Running !!!" });
  },

  //!----------------------------------- (Trabalho SENAI)

  //! Registrar coleta no banco de dados com data

  registerCalendar: async (req, res) => {
    const { id, calendario, materiais, peso, observacao } = req.body;
    // console.log(req.body)
    // console.log(calendario)
    const t = req.body.calendario;
    console.log(t);
    const data = moment(calendario, 'DD/MM/YYYY').format('YYYY-MM-DD');
    //console.log(data)
    try {
      await clientController.registerCalendar(
        id,
        calendario,
        materiais,
        peso,
        observacao
      );
      res.status(201).json({ msg: "Agendado com sucesso" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          msg: "Ocorreu um erro durante o agendamento, por favor tente novamente",
        });
    }
  },

  //!Deletar coleta do banco de dados

  deletarIdAgenda: async (req, res) => {
    try {
      const sql = await clientController.getByIdProjetoGreen(req.params.id);

      // console.log(sql)

      if (sql === null) {
        res.status(401).json({ msg: "Agenda não encontrada." });
      } else {
        await clientController.deleteAgenda(req.params.id);
        res.status(200).json({ msg: "Agenda deletada com sucesso!" });
      }
    } catch (error) {
      console.error("Erro ao deletar a Agenda:", error);
    }
  },

  //! Reagendar coleta

  updateAgenda: async (req, res) => {
    const { calendario, materiais, peso, observacao } = req.body;
    const data = moment(calendario, "DD/MM/YYYY").format("YYYY-MM-DD");

    // const sql = await clientController.getByIDAgenda(req.params.id);

    try {
      await clientController.updateAgenda(
        data,
        materiais,
        peso,
        observacao,
        req.params.id
      );
      res.status(201).json({ msg: "Reagendado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao tentar reagendar a coleta" });
    }
  },

  //!Login PROJETO SENAI

  loginProjeto: async (req, res) => {
    let { email, senha } = req.body;

    try {
      const sql = await clientController.validateLoginProjetoGreen(
        email,
        senha
      );

      if (sql != null) {
        res.status(201).json({ msg: "Usuário válidado com sucesso" });
      } else {
        res.status(401).json({ msg: "credenciais inválidas" });
      }
    } catch (error) {
      if (error) {
        res.status(500).json(error);
      }
    }
  },

  //!Cadastrar um novo usuário no banco com senha criptografada
  registerProjetoUser: async (req, res) => {
    const { id, nome, email, senha } = req.body;

    try {
      const sql = await clientController.getByIdProjetoGreen(email);

      if (sql.length > 0) {
        res
          .status(401)
          .json({
            msg: "O email já esta cadastrado na base de dados, insira um email diferente",
          });
      } else {
        await clientController.registerProjetoGreen(id, nome, email, senha);
        res.status(201).json({ msg: "Usuario cadastro com sucesso" });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Ocorreu um erro durante o registro do usuário" });
    }
  },

  //!Trocar Senha
  resetPassworldProjeto: async (req, res) => {
    let { email, senha } = req.body;

    email = email.toLowerCase();

    try {
      await clientController.updatePasswordProjetoGreen(email, senha);
      res.status(200).json({ msg: "Senha atualizada com sucesso" });
    } catch (error) {
      console.log("erro ao redefinir a senha");
      res.status(500).json({ msg: "Erro no servidor" });
    }
  },

  //!Ver se o email registrado está no Bando de Dados
  getEmailResetProjetoGreen: async (req, res) => {
    let email = req.body.email;

    email = email.toLowerCase();

    try {
      const sql = await clientController.getByEmailProjetoGreen(email);

      if (sql.length > 0) {
        res.status(200).json({ msg: "Success" });
      } else {
        res.status(401).json({ msg: "Email não cadastrado no BD" });
      }
    } catch (error) {
      if (error) {
        res.status(500).json(error);
      }
    }
  },

  getAllAgenda: async (req, res) => {
    try {
      const agenda = await clientController.getAllAgenda();
      res.status(200).json(agenda);
    } catch (error) {
      res.status(500).json({ msg: "Erro no servidor" });
    }
  },
};

module.exports = userController;
