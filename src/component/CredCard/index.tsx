import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import ClientInfoService from '../../service/ClientInfoService';
import { ClientInfo } from '../../../types';
import formatDate from '../../utils/FormatDate';



const CredCard = () => {
    const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null);

    useEffect(() => {
        ClientInfoService.getClientInfo().then((data) => {
            if (data.length > 0) {
                setClientInfo(data[0]);
            }
        });
    }, []);

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
                <Text style={styles.cardNumber}>{clientInfo.cardNumber}</Text>
                <View style={styles.cardDetails}>
                    <CardDetail title="Valid Thru" content={formatDate(clientInfo.expirationDate)} />
                    <CardDetail title="Card Holder" content={clientInfo.name} />
                </View>
            </View>
        </ImageBackground>
    );
}

const CardDetail = ({ title, content }: { title: string, content: string }) => (
    <View>
        <Text style={styles.cardLabel}>{title}</Text>
        <Text style={styles.cardInfo}>{content}</Text>
    </View>
);

export default CredCard;
