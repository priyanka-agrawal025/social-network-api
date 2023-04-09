const mongoose = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = mongoose.Schema({
    thoughttext: {
        type: String,
        required: true,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
   },
   {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
   });

   const Thought = model('Thought', thoughtSchema);

   const handleError = (err) => console.error(err);

   module.exports = {Thought};
