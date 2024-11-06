import { Alert, TouchableOpacity, ImageBackground, KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import { useContext, useState } from 'react';
import { styles } from './style';
import { Image, Input } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome"
import IconEntypo from 'react-native-vector-icons/Entypo';
import Button from '../../components/button/button';
import { AuthContext } from '../../context/auth';
import api from '../../constants/api';

export default function SignUpScreen(props) {
     const { container, containerLogo, logo, tileText, bodyStyle, keyboardStyle } = styles;
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const bg = require("../../assets/bgLogin.png");
     const logoLogin = require("../../assets/icon.png")
     const [showPass, setShowPass] = useState(true);
     const { setUser } = useContext(AuthContext);

     async function HandleSignUp(params) {
          try {
               const response = await api.post("/users/register", {
                    name,
                    email,
                    password,
               });
               // Alert.alert("Erro")
               if (response.data) {
                    console.log(response.data.token);
                    // Aqui ele salva o token no cabeçário para reaproveitar:
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
                    <View style={containerLogo}>
                         <Image source={logoLogin} resizeMode='cover' style={logo} />
                         <Text style={tileText}>Gênio do Corte</Text>
                    </View>
                    <View style={bodyStyle} >
                         <KeyboardAvoidingView behavior='padding'
                              style={keyboardStyle}>
                              <Input
                                   placeholderTextColor={"#fff"}
                                   style={{ color: "#fff", marginLeft: 15 }}
                                   placeholder='Digite seu nome'
                                   value={name}
                                   onChangeText={setName}
                                   leftIcon={<Icon
                                        name='user'
                                        size={24}
                                        color='#fff'
                                   />}
                              />
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
                              <Button onPress={HandleSignUp} text="Cadastro" theme="primary" />
                              <View style={styles.footer}>
                                   <Text>Não tenho conta. </Text>
                                   <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                        <Text style={styles.footerLink}>
                                             Fazer login.
                                        </Text>
                                   </TouchableOpacity>
                              </View>
                         </KeyboardAvoidingView>
                    </View>

               </ImageBackground>
          </>
     );
}