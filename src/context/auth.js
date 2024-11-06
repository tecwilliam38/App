import { createContext, useState } from 'react';
import { View } from 'react-native';

const AuthContext = createContext({});

function AuthProvider(props) {

     const [user, setUser] = useState({});

     return <AuthContext.Provider value={{ user, setUser }} >
               {props.children}
          </AuthContext.Provider>
}

export { AuthContext, AuthProvider }