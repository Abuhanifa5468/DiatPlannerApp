/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox,
} from 'react-native';
import 'react-native-gesture-handler';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import tailwind from '@tailwind';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
// import SQLite from 'react-native-sqlite-storage';

import RootNavigation from './navigations/RootNavigation';
import store from './store';
import Toast from 'react-native-toast-message';
import {toastConfig} from './constants/toastConfig';

const queryClient = new QueryClient();

LogBox.ignoreLogs(['Setting a timer']);

if (__DEV__ === false) {
  console.log = () => {};
}

// import tailwind from 'tailwind-rn';
// import tailwind from './tailwind';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="green" />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RootNavigation />
        </QueryClientProvider>
      </Provider>
      {/* <View style={{bottom: '30%'}}> */}
      <Toast config={toastConfig} />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default App;
