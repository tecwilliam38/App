import { NavigationContainer } from '@react-navigation/native';

import {AuthProvider} from "./src/context/auth"
import Routes from "./src/routes/router.js"

function App({ navigation }) {

  return <NavigationContainer>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </NavigationContainer>
}

export default App;