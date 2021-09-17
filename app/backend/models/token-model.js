'use strict'

const {Schema, model} = require ('mariadb');

const TokenSchema = new Schema ({
    user: {type: Schema.Types.ObjectID, ref: 'User'},
    refreshToken: {type: String, require: true},
})

module.exports = model('Token', TokenSchema);