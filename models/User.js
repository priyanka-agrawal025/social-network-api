const mongoose = require('mongoose');
const Thought = require('./Thought')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/],
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
});

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

// const handleError = (err) => console.error(err);

module.exports = {User};
