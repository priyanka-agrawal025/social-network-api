const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        validate: [validateEmail, 'Please fill out a valid email address'],
        match: [/.+@.+\..+/],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
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

const User = mongoose.model("User", userSchema);

const handleError = (err) => console.error(err);

module.exports = {User};
