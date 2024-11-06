import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        width:'100%',
    },
    item: {
        borderWidth: 1,
        borderRadius:6,
        borderColor: COLORS.gray4,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15,
        marginHorizontal:13,
        marginVertical:5,
    },
    title: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray2,
        marginBottom: 4
    },
    text: {
        fontSize: FONT_SIZE.md+1,
        color: COLORS.gray1
    }
}