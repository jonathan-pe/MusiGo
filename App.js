import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LibraryBrowser from './views/LibraryBrowser';

const AppNavigator = createStackNavigator(
    { LibraryBrowser },
    {
        initialRouteName: 'LibraryBrowser',
    },
);

export default createAppContainer(AppNavigator);
