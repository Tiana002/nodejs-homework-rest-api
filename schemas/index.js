const { contactSchema, updateFavoriteSchema } = require('./contactSchema');
const {
    registerSchema,
    emailSchema,
    loginSchema,
    updateSubscriptionSchema,
} = require('./userSchema');


module.exports = {
    contactSchema,
    updateFavoriteSchema,
    registerSchema,
    emailSchema,
    loginSchema,
    updateSubscriptionSchema,
};