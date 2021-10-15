const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema;

const ProspectoSchema = new mongoose.Schema({

    nameProspecto:{
        type: String,
        
        trim: true,

        min:2,

        max:160,

        required: true

    },

    firstSurname:{

        type: String,

        min:2,

        required: true

    },

    lastSurname: {

        type: String,

        min:2,
        
    },

    streetAddress:{

        type: String,

        required: true

    },

    numbAddress:{

        type: String,

        required: true

    },

    nameAddress:{

        type: String,

        required: true

    },

    zipCode:{

        type: String,

        required: true

    },

    phone:{

        type: String,

        required: true
    },

    rfc:{
        
        type: String,

        required: true
    },
    status:{
        
        type: String,

    },
    observaciones:{
        type: String,
    }
    




}, {timestamps: true}
);

module.exports = mongoose.model('Prospecto', ProspectoSchema)