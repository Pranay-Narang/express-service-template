require('dotenv').config()

var CONFIG = {}

CONFIG.port = process.env.PORT || 3000
CONFIG.APP_ENV = process.env.NODE_ENV || 'development'

CONFIG.DB_URL = process.env.DB_URL || '127.0.0.1'
CONFIG.DB_NAME = process.env.DB_NAME || 'template'
CONFIG.DB_USERNAME = process.env.DB_USERNAME
CONFIG.DB_PASSWORD = process.env.DB_PASSWORD

CONFIG.FIREBASE_ACCOUNT_TYPE = process.env.FIREBASE_ACCOUNT_TYPE || 'service_account'
CONFIG.FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID
CONFIG.FIREBASE_PRIVATE_KEY_ID = process.env.FIREBASE_PRIVATE_KEY_ID
CONFIG.FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY
CONFIG.FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL
CONFIG.FIREBASE_CLIENT_ID = process.env.FIREBASE_CLIENT_ID
CONFIG.FIREBASE_AUTH_URI = process.env.FIREBASE_AUTH_URI || 'https://accounts.google.com/o/oauth2/auth'
CONFIG.FIREBASE_TOKEN_URI = process.env.FIREBASE_TOKEN_URI || 'https://accounts.google.com/o/oauth2/auth'
CONFIG.FIREBASE_AUTH_PROVIDER_x509_CERT_URL = process.env.FIREBASE_AUTH_PROVIDER_x509_CERT_URL || 'https://www.googleapis.com/oauth2/v1/certs'
CONFIG.FIREBASE_CLIENT_x509_CERT_URL = process.env.FIREBASE_CLIENT_x509_CERT_URL

module.exports = CONFIG