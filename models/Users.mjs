import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const { Schema } = mongoose

const usersSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    contactNo: Number
})

usersSchema.pre('save', function (next) {
    const user = this

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash

    next()
})

usersSchema.methods.comparePassword = function(password) {
    const user = this

    return bcrypt.compareSync(password, user.password)
}

const Users = mongoose.model('users', usersSchema)

export default Users