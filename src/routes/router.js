import { useContext, useState } from 'react';
import ProtectedRoutes from './routes.protected.js';
import PublicRoutes from './routes.open.js';

import { AuthContext } from '../context/auth.js';
import { ImageBackground, Text, View } from 'react-native';
import { ActivityIndicator, StyleSheet } from 'react-native';
import {
     BallIndicator,
     BarIndicator,
     DotIndicator,
     MaterialIndicator,
     PacmanIndicator,
     PulseIndicator,
     SkypeIndicator,
     UIActivityIndicator,
     WaveIndicator,
} from 'react-native-indicators';
// npm i react-native-indicators
function Routes() {

     const { user } = useContext(AuthContext);
     const [loading, setLoading] = useState(true);
     function Splash() {
          return (
               <>
                    <ImageBackground
                         source={require("../../assets/splash.png")}
                         resizeMode='stretch'
                         style={{ flex: 1, alignItems: "center", justifyContent: "center", transform: "scale" }}>
                         <BarIndicator color="#FFF" style={{top:160}} size={60} />
                    </ImageBackground>
               </>
          )
     }

     if (loading) {
          setTimeout(() => {
               setLoading(false);
          }, 5000);
          return <Splash />
     }
     return (
          user.id_user ? <ProtectedRoutes /> : <PublicRoutes />
     );
}

export default Routes;