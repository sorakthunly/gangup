import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux'
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { Dimensions } from "react-native";
import { light as lightTheme, mapping } from '@eva-design/eva';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';

import reducers from './src/redux/reducers';
import Routes from './src/routes/Routes';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const ApplicationContent = () => {
	const fullWidth = Dimensions.get('window').width;
	const fullHeight = Dimensions.get('window').height;

	return (
		<Layout style={{ width: fullWidth, height: fullHeight }}>
			<Routes />
		</Layout>
	);
};

const App = () => (
	<NativeRouter>
		<Provider store={store}>
			<ApplicationProvider mapping={mapping} theme={lightTheme}>
				<ApplicationContent />
			</ApplicationProvider>
		</Provider>
	</NativeRouter>
);

export default App;
