const {validationResult} = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Services = require('../models/servicess');
const User = require('../models/user');


const getAllServicess = async (req, res, next) => {
    let services;
    try {
        servicess = await Services.find();
    } catch (err) {
        const error = new HttpError(
            'Fetching servicess failed, please try again later.',
            500
        );
        return next(error);
    }
    await res.json({
        servicess: servicess.map(servicess =>
            servicess.toObject({getters: true})
        )
    });
};
const getServicessById = async (req, res, next) => {
    const servicessId = req.params.sid;

    let servicess;
    try {
        servicess = await Services.findById(ServicesId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find a servicess.',
            500
        );
        return next(error);
    }

    if (!servicess) {
        const error = new HttpError(
            'Could not find servicess for the provided id.',
            404
        );
        return next(error);
    }

    await res.json({servicess: servicess.toObject({getters: true})});
};

const createServicess = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }
    const {services,name, mobilenumber, city, gender, price,description} = req.body;
    const date = Date().toLocaleString();
    let filePath;

    if (req.file) {
        filePath = req.file.path;
    } else {
        filePath = 'uploads/images/Dservicess.jpeg'
    }
    const createdServicess = new Services({
        services,
        name,
        mobilenumber,
        city,
        gender,
        price,
        description,
        image: 'http://localhost:5000/' + filePath,
        createdOn: date,
    });

    try {
        await createdServicess.save();
       } catch (err) {
        const error = new HttpError(
            err.message + "lol",
            500
        );
        return next(error);
    }

    res.status(201).json({services: createdServicess});
};

const updateServicess = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const {name, mobilenumber, city, gender, price, description} = req.body;
    const servicessId = req.params.sid;

    let servicess;
    try {
        servicess = await Services.findById(Id);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not update servicess.',
            500
        );
        return next(error);
    }

    servicess.name = name;
    servicess.mobilenumber = mobilenumber ;
    servicess.city = city;
    servicess.gender = gender;
    servicess.price = price;
    servicess.description = description;

    try {
        await servicess.save();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not update servicess.',
            500
        );
        return next(error);
    }

    res.status(200).json({
        servicess: servicess.toObject(
            {getters: true})
    });
};

const deleteServicess = async (req, res, next) => {
    const servicessId = req.params.sid;
    let servicess;
    try {
        servicess = await Services.findById(servicessId).populate('serviceusedby');
    } catch (err) {
        const error = new HttpError(
            err.message,
            500
        );
        return next(error);
    }

    if (!servicess) {
        const error = new HttpError('Could not find servicess for this id.', 404);
        return next(error);
    }

        try {
            await Services.remove();
        } catch (err) {
            const error = new HttpError(
                err.message,
                500
            );
            return next(error);
        }

        res.status(200).json({message: 'Deleted servicess.'});

};
const searchServicess = async (req, res, next) => {
    const query = req.params.query;
    let results;
    try {
        let agg = Services.aggregate([{
            $search: {
                "text": {
                    "query": query, "path": ["services","name", "mobilenumber", "city", "Price"], "fuzzy": {
                        "maxEdits": 2,
                        "maxExpansions": 20,
                    }
                }
            }
        }, {
            $project: {
                "services": 1,
            }
        }]);
        results = await agg.exec();
    } catch (err) {
        const error = new HttpError(err.message, 404);
        return next(error);
    }
    if (results.length === 0) {
        await res.json({results: "No results found!!"});
    } else {
        await res.json({results: results});
    }

};


exports.getServicessById = getServicessById;
exports.createServicess = createServicess;
exports.updateServicess = updateServicess;
exports.deleteServicess = deleteServicess;
exports.getAllServicess = getAllServicess;
exports.searchServicess = searchServicess;

