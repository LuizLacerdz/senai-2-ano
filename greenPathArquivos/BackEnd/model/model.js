const connection = require("../config/db");
const bcrypt = require("bcrypt");
const salt = 10;

const userModel = {
  //Green_Path
  //! Cadastrar Calendario
  registerCalendar: async (id, calendario, materiais, peso, observacao) => {
    const [result] = await connection
      .query("INSERT INTO agenda values(?, ?, ?, ?, ?)", [
        id,
        calendario,
        materiais,
        peso,
        observacao,
      ])
      .catch((erro) => console.log(erro));
    return result;
  },

  //! Pegar o ID da Agenda
  getByIDAgenda: async (id) => {
    const [result] = await connection
      .query("SELECT * FROM agenda WHERE id=?", [id])
      .catch((erro) => console.log(erro));
    return result;
  },

  //! Deletar da tabela agenda
  deleteAgenda: async (id) => {
    const [result] = await connection
      .query("DELETE FROM agenda where id=?", [id])
      .catch((erro) => console.log(erro));
    return result;
  },

  //! Reagendar coleta
  updateAgenda: async (calendario, materiais, peso, observacao, id) => {
    const [result] = await connection
      .query(
        "UPDATE agenda SET calendario=?, materiais=?, peso=?, observacao=? WHERE id=?",
        [calendario, materiais, peso, observacao, id]
      )
      .catch((erro) => console.log(erro));
    return result;
  },

  //!Validar SENHA CRIPTOGRAFADA
  validateLoginProjetoGreen: async (email, senha) => {
    const [result] = await connection.query(
      "SELECT * FROM usuarios WHERE email=?",
      [email]
    );
    try {
      if (result.length > 0) {
        const user = result[0];

        const validate = await bcrypt.compare(senha, user.senha);

        if (validate) {
          return result;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } catch (erro) {
      console.log(erro);
    }
  },

  //!Registrar senha criptografada
  registerProjetoGreen: async (id, nome, email, senha) => {
    const handPassword = await bcrypt.hash(senha, salt);

    const [result] = await connection
      .query("INSERT INTO usuarios values(?,?,?,?)", [
        id,
        nome,
        email,
        handPassword,
      ])
      .catch((erro) => console.log(erro));
    return result;
  },

  //!Atualizar senha
  updatePasswordProjetoGreen: async (email, senha) => {
    const handPassword = await bcrypt.hash(senha, salt);

    try {
      const [result] = await connection.query(
        "UPDATE usuarios SET senha=? WHERE email=?",
        [handPassword, email]
      );
      return result;
    } catch (erro) {
      throw erro;
    }
  },

  //!Pegar Email GREEN
  getByIdProjetoGreen: async (id) => {
    const [result] = await connection
      .query("SELECT * FROM agenda WHERE id=?", [id])
      .catch((erro) => console.log(erro));
    return result;
  },

  getAllAgenda: async () => {
    const [result] = await connection
      .query("SELECT * FROM agenda")
      .catch((erro) => console.log(erro));
    return result;
  },
};

module.exports = userModel;
