import axios from 'axios';
import { ProductInterface } from '../types/interfaces';
const URL = process.env.ApiUrl;

async function getProducts(page: number, rows: number, sortBy: string, orderBy: string): Promise<ProductInterface[]>{
    const response = await axios.get<ProductInterface[]>('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products', {
        params: {
            page: page,
            rows: rows,
            sortBy: sortBy,
            orderBy: orderBy
        }
    });
    return response.data;
}
export const api = {
    getProducts,
};