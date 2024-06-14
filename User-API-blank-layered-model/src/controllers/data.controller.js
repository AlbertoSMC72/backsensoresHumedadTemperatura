import { getDataService, getFechaService, getAverageMonthService, postDataService } from "../services/data.service.js";

export const getDataController = async (req, res) => {
    getDataService()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).send(error.message));
}

export const getFechaController = async (req, res) => {
    const { dateStart, dateEnd } = req.body;
    getFechaService({ dateStart, dateEnd })
        .then((fecha) => res.status(200).send(fecha))
        .catch((error) => res.status(500).send(error.message));
}

export const getAverageMonthController = async (req, res) => {
    getAverageMonthService()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).send(error.message));
}

export const postDataController = async (req, res) => {
    const data = req.body;
    postDataService(data)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).send(error.message));
}