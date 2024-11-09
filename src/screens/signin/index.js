import {Alert, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import { styles } from './style';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';
import Icon from "react-native-vector-icons/FontAwesome"
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Input } from 'react-native-elements';
import Button from '../../components/button/button';
import api from '../../constants/api';


export default function SignInScreen(props) {
     const { container, containerLogo, logo, tileText, bodyStyle, keyboardStyle } = styles;
     const { setUser } = useContext(AuthContext);
     const bg = require("../../assets/bgLogin.png")
     const logoLogin = require("../../assets/icon.png")
     const [showPass, setShowPass] = useState(true);

     // const [email, setEmail] = useState("williamfrs_33@hotmail.com");
     // const [password, setPassword] = useState("091@William");
     // const [email, setEmail] = useState("lorenna_leal@hotmail.com");
     // const [password, setPassword] = useState("123456");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     function ClickSignUp() {
          props.navigation.navigate("SignUp")
     }
     async function HandleSignin(params) {
          try {
               const response = await api.post("/users/login", {
                    email,
                    password,
               });
               if (response.data) {
                    //Guarda o token no cabeçário para reaproveitar na aplicação:
                    api.defaults.headers.common['authorization'] = "Bearer " + response.data.token;
                    setUser(response.data)
               }
               else {
                    Alert.alert(Token)
               }
          } catch (error) {
               if (error.response?.data.error)
                    console.log(error.response.data.error);
          }
     }

     return (
          <>
               <StatusBar hidden={true} />
               <ImageBackground source={bg} style={container}>
                    <View style={container}>
                         <View style={containerLogo}>
                              <Image source={logoLogin} resizeMode='cover' style={logo} />
                         </View>
                         <Text style={tileText}>Gênio do Corte</Text>
                         <View style={bodyStyle} >
                              <KeyboardAvoidingView behavior='padding'
                                   style={keyboardStyle}>
                                   <Input
                                        placeholderTextColor={"#fff"}
                                        style={{ color: "#fff", marginLeft: 10, width: '100%' }}
                                        placeholder='E-mail'
                                        value={email}
                                        onChangeText={setEmail}
                                        leftIcon={<Icon
                                             name='envelope'
                                             size={22}
                                             color='#fff'
                                        />}
                                   />
                                   <Input
                                        placeholder='Password'
                                        placeholderTextColor={"#fff"}
                                        style={{ color: "#fff", marginLeft: 10 }}
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={showPass}
                                        leftIcon={
                                             <IconEntypo
                                                  name={showPass ? "eye-with-line" : "eye"}
                                                  size={22}
                                                  color='#fff'
                                                  onPress={() => setShowPass(!showPass)}
                                             />
                                        }
                                   />
                                   <Button onPress={HandleSignin} text="Login" theme="primary" />
                                   <View style={styles.footer}>
                                        <Text>Não tenho conta. </Text>
                                        <TouchableOpacity onPress={ClickSignUp} >
                                             <Text style={styles.footerLink}
                                             >Criar conta agora.
                                             </Text>
                                        </TouchableOpacity>
                                   </View>
                              </KeyboardAvoidingView>
                         </View>
                    </View>
               </ImageBackground>
          </>
     );
}