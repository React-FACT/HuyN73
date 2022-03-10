const { UserService } = require('../services/user.service');
const _userService = new UserService();
const logger = require('../logger/winston.logger');

const userGetAll = async (req, res) => {
    res.json(await _userService.getAll());
};

const userGetById = async (req, res) => {
    res.json(await _userService.getById(req.params.id));
};

const userCreate = async (req, res) => {
    res.json(await _userService.create(req.body));
};

const userUpdate = async (req, res) => {
    res.json(await _userService.update(parseInt(req.params.id), req.body));
};

const userDelete = async (req, res) => {
    res.json(await _userService.delete(parseInt(req.params.id)));
};

module.exports = {
    userGetAll,
    userGetById,
    userCreate,
    userUpdate,
    userDelete,
};
