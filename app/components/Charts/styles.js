import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native'

const height = 150;
const width= Dimensions.get('window').width / 2;
const fullheight= Dimensions.get('window').height;
const styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '$gray',
        borderRadius: 8
    },

    chartsbox:{
        flex: 2,
        backgroundColor: '$white',
        shadowColor: '$gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        paddingTop: 10,
    },

    graph:{
        width: width,
        height: 100,
    },

    graphtitle:{
        textAlign:'center',
        color: '$black',
        fontWeight: '900',
        letterSpacing:0.2,
        paddingTop: 10,
        paddingBottom:10
    },

    chartgraph:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },

    content:{
        backgroundColor: '$white',
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15
    },

    description:{
        color: '$black'
    },
});

export default styles;