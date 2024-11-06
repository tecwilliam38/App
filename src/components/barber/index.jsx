import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./barber.style.js";
import icon from "../../constants/icon.js";

function Barber(props) {
    const m = "M";
    return <TouchableOpacity style={styles.barber} 
    onPress={()=> props.onPress(props.id_barber, props.name, props.specialty, props.icon)}
    > 
        <Image source={props.icon == m ? icon.female : icon.male} style={styles.icon} />

        <View>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.specialty}>{props.specialty}</Text>
        </View>
    </TouchableOpacity>
}

export default Barber;