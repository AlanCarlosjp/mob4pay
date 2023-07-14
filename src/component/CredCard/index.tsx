import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import ClientInfoService from '../../service/ClientInfoService';
import PurchaseService from '../../service/Purchases';
import { ClientInfo, Purchase } from '../../../types';
import formatDate from '../../utils/FormatDate';

const CredCard = () => {
    const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null);
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [isCardFlipped, setCardFlipped] = useState<boolean>(false);

    useEffect(() => {
        ClientInfoService.getClientInfo().then((data) => {
            if (data.length > 0) {
                setClientInfo(data[0]);
            }
        });

        PurchaseService.getPurchases().then(setPurchases);
    }, []);

    const totalPurchaseValue = purchases.reduce((sum, purchase) => sum + purchase.value, 0);

    if (!clientInfo) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity onPress={() => setCardFlipped(!isCardFlipped)}>
            <ImageBackground
                source={require('../../../assets/card-front.png')}
                style={styles.card}
                resizeMode="cover"
            >
                <View style={styles.cardContent}>
                    {isCardFlipped ? (
                        <Text style={styles.cardNumber}>Total de gastos: R${totalPurchaseValue.toFixed(2)}</Text>
                    ) : (
                        <>
                            <Text style={styles.cardNumber}>{clientInfo.cardNumber}</Text>
                            <View style={styles.cardDetails}>
                                <CardDetail title="Valid Thru" content={formatDate(clientInfo.expirationDate)} />
                                <CardDetail title="Card Holder" content={clientInfo.name} />
                            </View>
                        </>
                    )}
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const CardDetail = ({ title, content }: { title: string, content: string }) => (
    <View>
        <Text style={styles.cardLabel}>{title}</Text>
        <Text style={styles.cardInfo}>{content}</Text>
    </View>
);

export default CredCard;
