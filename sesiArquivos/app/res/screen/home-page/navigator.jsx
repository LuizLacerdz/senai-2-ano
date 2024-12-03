// Gabriel / Test
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Box } from '@gluestack-ui/themed';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import CabeleireiroScreen from "../../screen/grupo-6/cabelereiro/Principal";
import AtletaScreen from '../grupo-1/atleta-page/atleta-page';
import SobreatletaScreen from '../grupo-1/sobre-atleta';
import DBAPage from '../grupo-3/database/database-page';
import EconomistaScreen from '../grupo-1/economista';
import EngenhariaScreen from '../grupo-2/nutricao/engenharia-page';
import NutricaoScreen from '../grupo-2/nutricao/nutricao-page';
import DatabaseScreen from '../grupo-3/database/database-page';
import PublicidadeScreen from '../grupo-3/publicidade/publicidade-page';
import Comissario from '../grupo-4/comissario/comissário';
import DesignScreen from '../grupo-4/design/design-page';
import AdministracaoScreen from '../grupo-5/administracao/administracao-page';
import JornalistaPage from '../grupo-5/jornalista-page/jornalista-page';
import MedicinaScreen from '../grupo-6/medicina/medicina';
import DireitoScreen from '../grupo-7/direito/direito-page';
import GeologoScreen from '../grupo-7/geologo-page/geologo-page';
import ArquiteturaScreen from '../grupo-8/arquitetura-page/arquitetura-page';
import PedreiroScreen from '../grupo-8/pedreiro/pedreiro-page';
import AvaialableJobs from './availableJobs';
import Home from './home';
import JobsBeingAdded from './jobsBeingAdded';
import OnBoarding from './onboarding';
import BIOScreen from './subjects/bio';
import FISScreen from './subjects/fis';
import GEOScreen from './subjects/geo';
import HISScreen from './subjects/his';
import INGScreen from './subjects/ing';
import LPScreen from './subjects/lp';
import MATScreen from './subjects/mat';
import QUIScreen from './subjects/qui';

export default function StartNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='OnBoarding' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnBoarding" component={OnBoarding}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="AvailableJobs" component={AvaialableJobs} />
                <Stack.Screen name="JobsBeingAdded" component={JobsBeingAdded} />
                {/* Jobs */}
                {/* First Jobs */}
                <Stack.Screen name="AtletaScreen" component={AtletaScreen} />
                <Stack.Screen name="SobreatletaScreen" component={SobreatletaScreen} />
                <Stack.Screen name="NutricaoScreen" component={NutricaoScreen} />
                <Stack.Screen name="DatabaseScreen" component={DatabaseScreen} />
                <Stack.Screen name="DesignScreen" component={DesignScreen} />
                <Stack.Screen name="AdministracaoScreen" component={AdministracaoScreen} />
                <Stack.Screen name="CabeleireiroScreen" component={CabeleireiroScreen} />
                <Stack.Screen name="DireitoScreen" component={DireitoScreen} />
                <Stack.Screen name="PedreiroScreen" component={PedreiroScreen} />
                {/* Second Jobs */}
                <Stack.Screen name="EconomistaScreen" component={EconomistaScreen} />
                <Stack.Screen name="EngenhariaScreen" component={EngenhariaScreen} />
                <Stack.Screen name="PublicidadeScreen" component={PublicidadeScreen} />
                <Stack.Screen name="ComissarioScreen" component={Comissario} />
                <Stack.Screen name="JornalistaPage" component={JornalistaPage} />
                <Stack.Screen name="MedicinaScreen" component={MedicinaScreen} />
                <Stack.Screen name="GeologoScreen" component={GeologoScreen} />
                <Stack.Screen name="ArquiteturaScreen" component={ArquiteturaScreen} />
                {/* Subjects */}
                <Stack.Screen name="MATScreen" component={MATScreen}/>
                <Stack.Screen name="LPScreen" component={LPScreen}/>
                <Stack.Screen name="GEOScreen" component={GEOScreen}/>
                <Stack.Screen name="INGScreen" component={INGScreen}/>
                <Stack.Screen name="FISScreen" component={FISScreen}/>
                <Stack.Screen name="HISScreen" component={HISScreen}/>
                <Stack.Screen name="QUIScreen" component={QUIScreen}/>
                <Stack.Screen name="BIOScreen" component={BIOScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}