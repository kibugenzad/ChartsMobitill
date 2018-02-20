import EStyleSheet from 'react-native-extended-stylesheet';

const height = 60;

const styles = EStyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor:'$gray',
        height: height,
        justifyContent:'center',
        paddingHorizontal: 15
    },

    back:{
        height: height,
        alignItems: "center",
        justifyContent:'center'
    },

    title:{
        flex: 1
    }
});

export default styles;
