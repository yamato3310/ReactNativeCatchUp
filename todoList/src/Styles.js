import { getStatusBarHeight } from 'react-native-status-bar-height';
export default Styles = {
    parentComponent: {
        top: getStatusBarHeight(),
        height: '100%'
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        height: (getStatusBarHeight() * 3),
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 36,
    },
    main: {
        flex: 1
    },
    todoForm: {
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#99F84B',
        flexDirection: 'row',
        fontSize: 24,
        height: 24,
        justifyContent: 'space-between',
        marginTop: 10,
        outline: 0,
        textAlign: 'center',
        width: '80%',
    },
    inputForm: {
        textAlign: 'center',
        width: '90%',
        height: '100%',
    },
    todoFormIcon: {
        height: 24,
        width: 24,
    },
    todoList: {
        flex: 1
    }
}
