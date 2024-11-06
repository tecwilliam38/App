import { Image, Text, View } from "react-native";
import { styles } from "./appointment.style.js";
import icon from "../../constants/icon.js";
import Button from "../../components/button/button.jsx";

function Appointment(props) {
    return <View style={styles.appointment}>
        <View style={styles.container}>
            <View style={styles.containerBooking}>
                <View style={styles.booking}>
                    <Image style={styles.icon}
                        source={icon.calendar} />
                    <Text style={styles.bookingDate}>
                        {props.bookingDate}
                    </Text>
                </View>

                <View style={styles.booking}>
                    <Image style={styles.icon}
                        source={icon.clock} />
                    <Text style={styles.bookingHour}>
                        {props.bookingHour}h
                    </Text>
                </View>

        <View style={{alignItems:"center"}}>
            <Text style={styles.name}>{props.barber}</Text>
            <Text style={styles.name}>Serviço: {props.service}</Text>
        </View>
            </View>

            <View style={styles.containerButton}>
                <Button text="Cancelar Reserva" theme="danger"
                    onPress={() => props.onPress(props.id_appointment)} />
            </View>

        </View>
    </View>
}

export default Appointment;