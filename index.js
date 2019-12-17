/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/store/index';
import {Provider} from 'react-redux';

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
// const ReduxApp = () => (
//   // 配置 Provider 为根组件，同时传入 store 作为其属性
//   <Provider store={store}>
//     {/* redux 持久化存储 */}
//     <PersistGate persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>
// );
AppRegistry.registerComponent(appName, () => ReduxApp);
