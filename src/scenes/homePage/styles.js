import { Platform, Dimensions } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../../utilities/fontScaling"

let appConfig = require('../../../appConfig');
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default {
    container: {
        flex: 1,
        width: screenWidth,
        backgroundColor: appConfig.BG_WHITE_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: moderateScale(30),
    },
    scrollViewContainer: {
        flex: 1,
        width: "100%",
        marginBottom: moderateScale(65),
        marginTop: moderateScale(30)
    },
    h1Text: {
        fontFamily: 'Avenir-Black',
        fontSize: moderateScale(25),
        letterSpacing: moderateScale(0.57),
        color: appConfig.DARK_BLUE_TEXT_COLOR
    },
    h2Text: {
        fontFamily: 'Avenir-Heavy',
        fontSize: moderateScale(20),
        letterSpacing: moderateScale(0.26),
        color: appConfig.DARK_BLUE_TEXT_COLOR
    },
    spendingHeadingText: {
        fontFamily: 'Avenir-Heavy',
        fontSize: moderateScale(15),
        letterSpacing: moderateScale(0.27),
        color: appConfig.DARK_BLUE_TEXT_COLOR
    },
    spendingDateText: {
        fontFamily: 'Avenir-Roman',
        fontSize: moderateScale(10),
        letterSpacing: moderateScale(0.18),
        color: appConfig.LIGHT_GRAY_TEXT_COLOR
    },
    spendingAmountText: {
        fontFamily: 'Avenir-Heavy',
        fontSize: moderateScale(15),
        letterSpacing: moderateScale(0.27),
        color: appConfig.SPENDING_AMOUNT_RED_COLOR,
        marginHorizontal: moderateScale(10)
    },
    smallTextHeavy: {
        fontFamily: 'Avenir-Heavy',
        fontSize: moderateScale(12),
        letterSpacing: moderateScale(0.1),
        color: appConfig.LIGHT_GRAY_TEXT_COLOR
    },
    smallTextMedium: {
        fontFamily: 'Avenir-Medium',
        fontSize: moderateScale(12),
        letterSpacing: moderateScale(0.1),
        color: appConfig.LIGHT_GRAY_TEXT_COLOR
    },
    smallTextRoman: {
        fontFamily: 'Avenir-Roman',
        fontSize: moderateScale(12),
        letterSpacing: moderateScale(0.1),
        color: appConfig.LIGHT_GRAY_TEXT_COLOR
    },
    tabIconText: {
        fontFamily: 'Avenir-Heavy',
        fontSize: moderateScale(8),
        letterSpacing: moderateScale(0.1),
        color: appConfig.LIGHT_GRAY_TEXT_COLOR
    },
    smallTextRed: {
        fontFamily: 'Avenir-Heavy',
        fontSize: moderateScale(12),
        letterSpacing: moderateScale(0.1),
        color: appConfig.RED_TEXT_COLOR
    },
    smallTextGreen: {
        fontFamily: 'Avenir-Heavy',
        fontSize: moderateScale(12),
        letterSpacing: moderateScale(0.1),
        color: appConfig.GREEN_TEXT_COLOR
    },
    headerContainer: {
        height: moderateScale(50),
        width: screenWidth,
        alignItems: 'center',
        // backgroundColor: 'lemonchiffon',
        justifyContent: 'space-between',
        flexDirection: "row",
        paddingHorizontal: moderateScale(20),
        marginTop: moderateScale(30)
    },
    cardBalanceContainer: {
        height: moderateScale(100),
        width: screenWidth,
        // backgroundColor: 'gainsboro',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(20),
    },
    cardBalanceInnerContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
    },
    timePeriodContainer: {
        height: moderateScale(50),
        width: screenWidth,
        flexDirection: "row",
        paddingLeft: moderateScale(20),
        // backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spennyPickerContainer: {
        width: moderateScale(110),
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: moderateScale(15)
    },
    tabBarContainer: {
        position: "absolute",
        bottom: 0,
        height: moderateScale(65),
        width: "100%",
        backgroundColor: appConfig.BG_WHITE_COLOR,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    tabBarItemsContainer: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    tabBarItemImage: {
        height: moderateScale(25),
        width: moderateScale(25),
        marginBottom: moderateScale(5),
        alignSelf: 'center'
    },
    tabBarAddButtonContainer: {
        zIndex: 100,
        alignContent: 'flex-start',
        alignSelf: "flex-start",
        justifyContent: 'center',
        paddingBottom: moderateScale(30),
    },
    spendingBreakdownContainer: {
        flex: 1,
        backgroundColor: '#f8f9f9',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: moderateScale(20)
    },
    spendingBreakdownItemContainer: {
        width: "100%",
        flexDirection: "row",
        height: moderateScale(50),
        alignItems: "center",
        borderRadius: moderateScale(7),
        marginVertical: moderateScale(6),
        backgroundColor: 'white',
        padding: moderateScale(10),
    },
    spendingBreakdownIconContainer: {
        height: moderateScale(30),
        width: moderateScale(30),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ff7e87',
        borderRadius: moderateScale(5)
    },
    spendingBreakdownTextContainer: {
        flexDirection: "column",
        flex: 1,
        marginHorizontal: moderateScale(12),
        alignSelf: "flex-start"
    },
    flatListItem: {
        marginHorizontal: moderateScale(5),
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: 'center',
        height: moderateScale(30),
        width: moderateScale(40),
        borderRadius: moderateScale(5),
    },
    maxMinContainer: {
        height: moderateScale(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoutImage: {
        height: moderateScale(20),
        width: moderateScale(25)
    },
    arrowUpImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(20),
        width: moderateScale(20),
        backgroundColor: '#e2f2eb',
        borderRadius: moderateScale(4),
        marginRight: moderateScale(8),
    },
    arrowDownImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(20),
        width: moderateScale(20),
        backgroundColor: '#f6e6e7',
        borderRadius: moderateScale(4),
        marginRight: moderateScale(8),
    },
    boxWithShadow: {
        shadowColor: "rgba(120,120,120,0.37)",
        shadowOffset: { width: moderateScale(0), height: moderateScale(0) },
        shadowOpacity: moderateScale(12), //blur
        shadowRadius: moderateScale(0), //spread
    },
}