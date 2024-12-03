const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./src/routers");
const client = require("./config/db");

const app = express();
app.use(bodyParser.json());
app.use(routers);

let server;

//função para realizar a chamada do servidor
beforeAll(() => {
  server = app.listen(8086);
});

// função para fechar conexão com o banco e encerrar o servidor
afterAll(async () => {
  await client.end();
  server.close();
});

it("PUT /api/editarcalendario/:id deve atualizar uma agenda", async () => {
  const id = 14;

  const updateUser = {
    calendario: "22/03/2024",
    materiais: "plastico",
    peso: "40kg",
    observacao: "plastico",
  };
  const res = await request(app)
    .put(`/api/editarcalendario/${id}`)
    .send(updateUser);
  if (res.statusCode === 201) {
    expect(res.body).toHaveProperty("msg", "Reagendado com sucesso");
  } else {
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty("msg", "Erro ao tentar reagendar a coleta");
  }
});

//rota para listar
it("GET /api/customer deve retornar uma lista agenda", async () => {
  const res = await request(app).get("/api/listaragenda");
  console.log(res.text); //Imprime os objetos do banco
  expect(res.statusCode).toEqual(200);
  expect(res.body).toBeInstanceOf(Array);
});

//Teste de rota para cadastar um usuario
it("POST /api/cadastroprojetoGreen deve criar um novo usuário", async () => {
  const data = {
    nome: "Teste",
    email: "testeeee@gmail.com",
    senha: "1234",
  };

  const res = await request(app).post("/api/cadastroprojetoGreen").send(data);
  if (res.statusCode === 201) {
    expect(res.body).toHaveProperty("msg", "Usuario cadastro com sucesso");
  } else {
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty(
      "msg",
      "Ocorreu um erro durante o registro do usuário"
    );
  }
});

//  Teste de rota para deletar uma agenda

it("DELETE /api/deletarcalendario/:id deve deletar uma agenda", async () => {
  const id = 13;
  const res = await request(app).delete(`/api/deletarcalendario/${id}`);
  if (res.statusCode === 200) {
    expect(res.body).toHaveProperty("msg", "Agenda deletada com sucesso!");
  } else {
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("msg", "Agenda não encontrada.");
  }
});
