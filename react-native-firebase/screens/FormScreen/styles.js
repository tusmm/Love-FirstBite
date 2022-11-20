import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#b67c7cff'
    },
    title: {
        marginTop:'35%',
        marginLeft:20,
        marginRight:20,
        width:300,
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        alignItems:'center'
    },
    titlesmall: {
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
        textAlign: 'center',
        color: '#fcebe8',
        fontWeight:"500",
        fontSize: 16,
        alignItems:'center'
    },
    logo: {
        flex: 1,
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#580000ff',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width:200,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    }
})