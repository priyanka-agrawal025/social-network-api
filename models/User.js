const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true },
})