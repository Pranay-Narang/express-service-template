require('dotenv').config()

var CONFIG = {}

CONFIG.port = process.env.PORT || 3000
CONFIG.DB_URL = process.env.DB_URL || '127.0.0.1'
CONFIG.DB_NAME = process.env.DB_NAME || 'template'
CONFIG.APP_ENV = process.env.NODE_ENV || 'development'

module.exports = CONFIG