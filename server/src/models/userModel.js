const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
    name: {
        Types: String,
        trim: true,
        require: [true, 'Name is required']
    },
    email : {
        Types: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
              return  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(v);
            },
        },
        message: 'Email is invalid',
        required: [true, 'Email is required']
    },
    password: {
        Types: String,
        required: [true, 'Password is required']
    },
    phone: {
        Types: Number,
        unique: true,
        required: [true, 'Phone is required']
    },
    user_image: {
        type: String,
        data: Buffer, 
        required: [true, 'image is required']
    },

    isAmin: {
        Types: Boolean,
        enum: [true, false],
        default: false
    }



}, {timestamps: true} )