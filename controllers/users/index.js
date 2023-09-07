
const register = require('./register');
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');

module.exports = {
    register,
    verifyEmail,
    resendVerifyEmail,
    login,
    logout,
    getCurrent,
    updateSubscription,
    updateAvatar,
};