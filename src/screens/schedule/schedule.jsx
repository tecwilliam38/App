import { Alert, Text, View } from "react-native";
import { styles } from "./schedule.style.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";
import api from "../../constants/api.js";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedule(props) {

    const { id_barber, id_service } = props.route.params;

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedHour, setSelectedHour] = useState("");

    async function ClickButton() {
        try {
            const response = await api.post("/agenda", {
                id_barber,
                id_service,
                booking_date: selectedDate,
                booking_hour: selectedHour
            });
            if (response.data?.id_appointment) {
                props.navigation.navigate("Calendar");
            }
            else{
                Alert.alert("Data indisponível");
            }
        } catch (error) {
            if (error.response?.data.error)
                console.log(error.response.data.error);
        }
    }

    return <View style={styles.container}>
        <View>
            <Calendar theme={styles.theme}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString)
                }}
                markedDates={{
                    [selectedDate]: { selected: true }
                }}

                minDate={new Date().toDateString()}
            />

            <View>
                <Text style={styles.textHour}>Horário</Text>
            </View>


            <View>
                <Picker selectedValue={selectedHour}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedHour(itemValue)
                    }}>
                    <Picker.Item label="Selecione um horário" value="" />
                    <Picker.Item label="09:00" value="09:00" />
                    <Picker.Item label="09:30" value="09:30" />
                    <Picker.Item label="10:00" value="10:00" />
                    <Picker.Item label="10:30" value="10:30" />
                    <Picker.Item label="11:00" value="11:00" />
                    <Picker.Item label="11:30" value="11:30" />
                    <Picker.Item label="13:00" value="13:00" />
                    <Picker.Item label="13:30" value="13:30" />
                    <Picker.Item label="14:00" value="14:00" />
                    <Picker.Item label="14:30" value="14:30" />
                </Picker>
            </View>

        </View>

        <View>
            <Button text="Confirmar Reserva" onPress={ClickButton} />
        </View>

    </View>
}

export default Schedule;