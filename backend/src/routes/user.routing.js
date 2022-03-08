const express = require('express');
const UserRouting = express.Router();
const {
    CommonMethodConstant,
    ControllerConstant,
} = require('../constants/api.constant');
const { appGetAll, appGetById } = require('../controllers/app.controller');

module.exports = { UserRouting };
