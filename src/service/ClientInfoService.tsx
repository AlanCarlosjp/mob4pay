import axios, { AxiosResponse } from 'axios';
import { ClientInfo } from '../../types';


class ClientInfoService {
    private API_URL = 'https://my-json-server.typicode.com/Adrianogba/desafio-flutter/client_info';

    public getClientInfo = async (): Promise<ClientInfo[]> => {
        try {
            const response: AxiosResponse<ClientInfo[]> = await axios.get(this.API_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching client info', error);
            return [];
        }
    }
}

export default new ClientInfoService();
