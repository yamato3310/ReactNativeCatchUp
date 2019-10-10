import { getStatusBarHeight } from 'react-native-status-bar-height';
export default Styles = {
    parentComponent: {
        top: getStatusBarHeight(),
        height: '100%'
    },
    header: {
        height: (getStatusBarHeight() * 3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 36,
    }
}
