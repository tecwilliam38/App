import { COLORS } from "../../constants/theme";


export const styles = {
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "space-beween",
        alignItems: "center",
    },
    containerLogo: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 2,
    },
    logo: {
        width: 120,
        height: 190,
        padding: 3,
        resizeMode: "cover"
    },
    tileText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 5,
    },
    bodyStyle: {
        flex: 1,
        justifyContent: 'space-around',
        width: "90%",
    },
    keyboardStyle: {
        width: "100%",
        justifyContent: "center",
        marginBottom: 30,
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    containerInput: {
        marginBottom: 15
    },
    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 20,

    },
    footerText: {
        color: "#ccc",
        paddingHorizontal: 5,
        fontSize: 15
    },
    footerLink: {
        color: COLORS.white,
        fontSize: 15
    }

}