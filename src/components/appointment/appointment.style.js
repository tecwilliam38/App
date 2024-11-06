import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    appointment: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.gray4,
        // alignItems:"center"
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginBottom: 2,
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    bookingDate: {
        fontSize: FONT_SIZE.sm-1,
        color: COLORS.gray2,
        marginTop: 3
    },
    bookingHour: {
        fontSize: FONT_SIZE.sm-2,
        color: COLORS.gray2,
        marginTop: 3
    },
    booking: {
        flexDirection: "row"
    },
    containerBooking: {
        flex: 1
    },
    containerButton: {
        marginTop: 15,        
    },
    container: {
        
    }
}