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
            <ActivityIndicator color="#FFF" size={20} />
        );
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;