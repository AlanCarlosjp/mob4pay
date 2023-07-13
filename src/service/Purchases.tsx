import axios, { AxiosResponse } from 'axios';
import { Purchase } from '../../types';


class PurchaseService {
    private API_URL = 'https://my-json-server.typicode.com/Adrianogba/desafio-flutter/purchases';

    public getPurchases = async (): Promise<Purchase[]> => {
        try {
            const response: AxiosResponse<Purchase[]> = await axios.get(this.API_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching purchases', error);
            return [];
        }
    }
}

export default new PurchaseService();
