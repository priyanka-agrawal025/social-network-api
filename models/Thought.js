const mongoose = require('mongoose');

const thoughtSchema = mongoose.Schema({
    thoughttext: {
        type: String,
        required: true,
        maxlength: 280,
    },
    createdAt: {
        
    }
})