const mongoose = require('mongoose');
const moment = require('moment');
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
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
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

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = { Thought };
