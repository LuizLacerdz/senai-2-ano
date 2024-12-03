import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//IIMPORT DAS TELAS
import HomeScreen from './src/telas/projeto/home/home';
import Catadores from './src/telas/projeto/catadores/Catadores';
import Agendamento from './src/telas/projeto/agendamento/agendamento';
import ColetasAgendadas from './src/telas/projeto/agendamento/coletasAgendadas/coletasAgendadas.jsx';
import PontosDeReciclagem from './src/telas/projeto/encontrePontosDeReciclagem/pontosDeReciclagem';
import Reciclagem from './src/telas/projeto/paginaReciclagem/reciclagem';
import Perfil1 from './src/telas/projeto/perfil/perfil1';
import CanceladaSucesso from './src/telas/projeto/cancelarColeta/canceladaSucesso.jsx';
import cancelarColeta from './src/telas/projeto/cancelarColeta/cancelarColeta.jsx';
import paginaInicial from './src/telas/projeto/paginaInicial/paginaInicial.jsx';
import Mapa from './src/telas/projeto/mapa/mapa.jsx';

//LOGIN, CADASTRO E RESET SENHA
import Login from './src/telas/projeto/login/Login.jsx';
import Cadastro from './src/telas/projeto/cadastro/cadastro.jsx';
import ResetSenha from './src/telas/projeto/resetarSenha/resetSenha.jsx';
import NovaSenha from './src/telas/projeto/resetarSenha/criarNovaSenha.jsx';
import PaginaSucesso from './src/telas/projeto/resetarSenha/senhaTrocada.jsx';

//Lixo AMARELO
import lixoAmarelo from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/lixoAmarelo';
import ReciclarMetal from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/ReciclarMetal';
import vasoMetal from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/vasoMetal';
import velasELanterna from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/velasELanternas';

//Lixo AZUL
import lixoAzul from './src/telas/projeto/tiposDeReciclagens/lixoAzul/lixoAzul';
import papelMache from './src/telas/projeto/tiposDeReciclagens/lixoAzul/papelMache';
import papelPicado from './src/telas/projeto/tiposDeReciclagens/lixoAzul/papelPicado';
import reciclarAzul from './src/telas/projeto/tiposDeReciclagens/lixoAzul/reciclarAzul';

//Lixo LARANJA
import LixoLaranja from './src/telas/projeto/tiposDeReciclagens/lixoLaranja/LixoLaranja';
import ReciclarLaranja from './src/telas/projeto/tiposDeReciclagens/lixoAzul/ReciclarLaranja';

//Lixo MARROM
import lixoMarrom from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/lixoMarrom';
import cascaDeBanana from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/cascaDeBanana';
import cascaDeBatata from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/cascaDeBatata';
import cascaDeLaranja from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/cascaDeLaranja';
import ReciclarMarrom from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/ReciclarMarrom';

//Lixo VERDE
import lixoVerde from './src/telas/projeto/tiposDeReciclagens/lixoVerde/lixoVerde';
import copo_vidro from './src/telas/projeto/tiposDeReciclagens/lixoVerde/copo_vidro';
import ReciclarVidro from './src/telas/projeto/tiposDeReciclagens/lixoVerde/ReciclarVidro';
import Terrario from './src/telas/projeto/tiposDeReciclagens/lixoVerde/terrario';

// Lixo VERMELHO
import lixoVermelho from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/lixoVermelho';
import bilboque from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/bilboque';
import Ioio from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/Ioio.jsx';
import reciclarVermelho from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/ReciclarVermelho';
import vasoDePlanta from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/vasoDePlanta';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pagina Inicial">
        <Stack.Screen
          name="Pagina Inicial"
          component={paginaInicial}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ResetSenha"
          component={ResetSenha}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Nova Senha"
          component={NovaSenha}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Pagina Sucesso"
          component={PaginaSucesso}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Catadores"
          component={Catadores}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Agendamento"
          component={Agendamento}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Coletas Agendadas"
          component={ColetasAgendadas}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Pontos de Reciclagem"
          component={PontosDeReciclagem}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Reciclagem"
          component={Reciclagem}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil1}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Cancelar Coleta"
          component={cancelarColeta}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Coleta Cancelada"
          component={CanceladaSucesso}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* Lixo AMARELO */}
        <Stack.Screen
          name="Lixo Amarelo"
          component={lixoAmarelo}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Reciclar Metal"
          component={ReciclarMetal}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Vaso Metal"
          component={vasoMetal}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Velas e Lanterna"
          component={velasELanterna}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* Lixo AZUL */}
        <Stack.Screen
          name="Lixo Azul"
          component={lixoAzul}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Papel Mache"
          component={papelMache}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Papel Picado"
          component={papelPicado}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Reciclar Azul"
          component={reciclarAzul}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* Lixo LARANJA */}
        <Stack.Screen
          name="Lixo Laranja"
          component={LixoLaranja}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Reciclar Laranja"
          component={ReciclarLaranja}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* Lixo MARROM */}
        <Stack.Screen
          name="Lixo Marrom"
          component={lixoMarrom}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Casca de Banana"
          component={cascaDeBanana}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Casca de Batata"
          component={cascaDeBatata}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Casca de Laranja"
          component={cascaDeLaranja}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Reciclar Marrom"
          component={ReciclarMarrom}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* Lixo VERDE */}
        <Stack.Screen
          name="Lixo Verde"
          component={lixoVerde}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Copo de Vidro"
          component={copo_vidro}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Reciclar Vidro"
          component={ReciclarVidro}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Terrario"
          component={Terrario}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* Lixo VERMELHO */}
        <Stack.Screen
          name="Lixo Vermelho"
          component={lixoVermelho}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Bilboque"
          component={bilboque}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Ioio"
          component={Ioio}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Reciclar Vermelho"
          component={reciclarVermelho}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Vaso de Planta"
          component={vasoDePlanta}
          options={{
            headerStyle: {
              backgroundColor: '#B6EAAD',
            },
            headerTintColor: '#000',
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
