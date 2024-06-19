import { getData, getDataByDate, getAverageMonth, postData } from '../repositories/data.repositories.js';

export const getDataService = async () => {
    try {
        const data = await getData();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getFechaService = async (dates) => {
    try {
        const fecha = await getDataByDate(dates);  
        return fecha;
    } catch (error) {
        throw error;
    }
};

export const getAverageMonthService = async () => {
    try {
        const data = await getAverageMonth();
        return data;
    } catch (error) {
        throw error;
    }
}

export const postDataService = async (data) => {
    try {
        const dataRes = await postData(data);
        return dataRes;
    } catch (error) {
        throw error;
    }
}