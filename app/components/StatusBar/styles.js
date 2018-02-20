import EStyleSheet from 'react-native-extended-stylesheet';
import Expo from 'expo'

const styles = EStyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor:'$black',
        height: Expo.Constants.statusBarHeight,
    },
});

export default styles;
