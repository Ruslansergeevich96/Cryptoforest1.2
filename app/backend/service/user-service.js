'use strict'

const UserModel = require ('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require ('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');

class UserService {
    async registration(email, password){
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink =  uuid.v4(); // v34ds-adsdwe-123sds-1adad

        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, activationLink);

        const UserDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateTokens({...UserDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }
}

module.exports = new UserService();