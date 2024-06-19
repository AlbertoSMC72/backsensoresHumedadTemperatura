import Data from '../models/data.model.js';

export const getData = async () => {
    try {
        const data = await Data.find().sort({$natural:-1}).limit(1).exec();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getDataByDate = async (data) => {
    const { dateStart, dateEnd } = data;
    try {
        const result = await Data.find({ dateRegistered: { $gte: dateStart, $lte: dateEnd } }).exec();
        return result;
    } catch (error) {
        throw error;
    }
};

export const getAverageMonth = async () => {

    try {
        const data = await Data.aggregate([
            {
                $group: {
                    _id: { $month: "$dateRegistered" },
                    avgTemperature: { $avg: { $avg: ["$temperature1", "$temperature2", "$temperature3", "$temperature4", "$temperature5"] } },
                    avgHumidity: { $avg: { $avg: ["$humidity1", "$humidity2", "$humidity3", "$humidity4", "$humidity5"] } }
                }
            }
        ]).exec();
        return data;
    } catch (error) {
        throw error;
    }
}

export const postData = async (data) => {
    try {
        const dataRes = await Data.create(data);
        return dataRes;
    } catch (error) {
        throw error;
    }
}