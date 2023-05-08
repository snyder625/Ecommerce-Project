import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
    },
    isAdmin: {
        type: 'boolean',
        required: true,
        default: false
    },
}, {timestamps: true});

export default mongoose.models.User || mongoose.model("User", UserSchema);