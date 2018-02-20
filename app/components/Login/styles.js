import EStyleSheet from 'react-native-extended-stylesheet';

const height = 45

const styles = EStyleSheet.create({
    container:{
        flex: 1,
    },

    headerLogin:{
        flex: 1
    },

    inputbox:{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 70,
        flexDirection: 'column'
    },

    input_container:{
        backgroundColor: '$red_light',
        height: height,
        borderRadius: 4,
        marginVertical: 15,
        shadowColor: '$red_black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 9,
        flexDirection:'row',
        paddingHorizontal: 20
    },

    input: {
        color: '$white',
        fontSize:15,
        fontWeight: '600',
        letterSpacing:-0.5,
        height: height,
        flex: 1,
    },

    textContainer:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '$black',
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'flex-end',
        marginVertical: 40,
        shadowColor: '$black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 9,
    },

    textButton:{
        color: '$white',
        fontSize: 15,
        fontWeight:'600',
    }
});

export default styles;
