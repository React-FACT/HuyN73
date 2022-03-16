const { BaseService } = require('./base/base.service');
const { UserRepository } = require('../repositories/user.repository');
const logger = require('../logger/winston.logger');

class UserService extends BaseService {
    _user;
    constructor() {
        let user = new UserRepository();
        super(user);
        this._user = user;
        logger.info(
            `==================== constructor ${this.constructor.name}====================`
        );
    }
}
module.exports = { UserService };
