import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native'
import {LogBox} from 'react-native'

import { AuthContext } from '../src/contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './Routes';


function Routes() {
    LogBox.ignoreAllLogs(true)
    const { signed, loading }: any = useContext(AuthContext)

    if (loading) {
        return(
<<<<<<< HEAD
            <View style={{flex: 1, alignItems:'center', justifyContent:'center',backgroundColor:'#000'}}>
                <ActivityIndicator color="#FFF" size={45} />
            </View>
=======
            <ActivityIndicator color="#FFF" size={20} />
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
        );
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;