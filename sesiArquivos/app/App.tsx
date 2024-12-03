import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import Home from './res/screen/home-page/home';
import StartNavigator from './res/screen/home-page/navigator';
import AvaialableJobs from './res/screen/home-page/availableJobs';


import LinearGradient from "react-native-linear-gradient";
import { LogBox, StatusBar } from 'react-native';
import EconomistaScreen from './res/screen/grupo-1/economista';


// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs();


export default function App() {
  return (
    <GluestackUIProvider config={config}>
      {/* Gradiente para barra de notificação */}
      <LinearGradient start={{ x: 0.0, y: 0.5 }} end={{ x: 2.3, y: 1.0 }}locations={[0, 0.5, 0.6]}colors={['#ee2d32', '#FF8450']} >
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient >
      <StartNavigator />
    </GluestackUIProvider>

  );
}
