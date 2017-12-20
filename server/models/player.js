var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be atleast 2 characters'],
        minLength: 2
    },
    position: {
        type: String,
        default: ''
    },
    status: {
        type: [String],
        required: true,
        default: ['undecided', 'undecided', 'undecided']
    }
}, { timestamps: true });

var Player = mongoose.model('Player', PlayerSchema);