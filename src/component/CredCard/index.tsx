import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import ClientInfoService from '../../service/ClientInfoService';
import { ClientInfo } from '../../../types';

const CredCard = () => {
    const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null);

    useEffect(() => {
        const fetchClientInfo = async () => {
            const data = await ClientInfoService.getClientInfo();
            if (data.length > 0) {
                setClientInfo(data[0]);
            }
        }

        fetchClientInfo();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        // Retorna no formato MM/YY
        return `${month.toString().padStart(2, '0')}/${year.toString().slice(-2)}`;

    }

    if (!clientInfo) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={require('../../../assets/card-front.png')}
            style={styles.card}
            resizeMode="cover"
        >
            <View style={styles.cardContent}>
                <Text style={styles.cardNumber}>
                    {clientInfo.cardNumber}
                </Text>
                <View style={styles.cardDetails}>
                    <View>
                        <Text style={styles.cardLabel}>Valid Thru</Text>
                        <Text style={styles.cardInfo}>{formatDate(clientInfo.expirationDate)}</Text>
                    </View>
                    <View>
                        <Text style={styles.cardLabel}>Card Holder</Text>
                        <Text style={styles.cardInfo}>{clientInfo.name}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default CredCard;
