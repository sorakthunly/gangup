import React from 'react';
import { createStore } from 'redux'
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { light as lightTheme, mapping } from '@eva-design/eva';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';

import reducers from './src/redux/reducers';
import Routes from './src/routes/Routes';

const store = createStore(reducers);

const ApplicationContent = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Routes />
	</Layout>
);

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
