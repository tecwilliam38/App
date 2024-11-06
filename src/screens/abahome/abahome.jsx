import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./abahome.style.js";
import Barber from "../../components/barber/index.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js"
import { Image } from "react-native-elements";
import icon from "../../constants/icon.js";

function AbaHome(props) {

    const [barbers, setBarbers] =  useState([]);

    function handleClick(id_barber, name, specialty, icon){
        props.navigation.navigate("Services", {
            id_barber,
            name,
            specialty,
            icon
        });
    }

    async function LoadBarbers() {
        try {
            const response = await api.get("/barbers");
            if (response.data) {
                setBarbers(response.data)
            }
        } catch (error) {
            if (error.response?.data.error)
                console.log(error.response.data.error);
        }
    }

    useEffect(() => {
        LoadBarbers();
    }, [])

    return <View style={styles.container}>
        <Image source={icon.logo} style={{width:"100%", height:80, marginBottom:10}}
                    resizeMode="cover" />  
        <Text style={styles.text}>Agende os seus serviços de Barbeiro</Text>

        <FlatList data={barbers}
        style={{padding:12}}
            keyExtractor={(doc) => doc.id_barber}            
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Barber name={item.name}
                    id_barber={item.id_barber}
                    icon={item.icon}
                    specialty={item.specialty}
                    onPress={handleClick}
                />
            }} />
    </View>
}

export default AbaHome;