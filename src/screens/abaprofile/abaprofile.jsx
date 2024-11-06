import { Text, View } from "react-native";
import { styles } from "./abaprofile.style.js";
import api from "../../constants/api.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.js";
import Button from "../../components/button/button.jsx";
import { Image } from "react-native-elements";
import icon from "../../constants/icon.js";



function AbaProfile() {
    const {setUser} = useContext(AuthContext);
    const [profileUser, setProfileUser] =  useState({});

    async function UserProfile(){
        try {
            const response = await api.get("/users/profile")
            setProfileUser(response.data);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        UserProfile();
    },[])

    function Logout(){
        setTimeout(() => {
            api.defaults.headers.common['authorization'] = "";                
            setUser({});            
        }, 1500);
    }

    return <View style={styles.container}>
        <Image source={icon.logo} style={{width:"100%", height:80, marginBottom:10}}
                    resizeMode="cover" />  
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>{profileUser.name}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>            
            <Text style={styles.text}>{profileUser.email}</Text>
        </View>       
        <View style={{alignItems:"center", marginHorizontal:13,
        marginVertical:15}}>
            <Button text="Desconectar" theme="danger" onPress={Logout}/>        
        </View>
    </View>
}

export default AbaProfile;