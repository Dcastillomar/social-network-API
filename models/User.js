const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            //function that checks if the email is in database and sends the message email already exists if in database.
            validator: async function (value) {
                const user = await this.constructor.findOne({ email: value });
                return !user;
            },
            message: 'Email already exists'
        }
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }]
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

userSchema.virtual('friendCount').get(function () {
    // Return the friends array
    return this.friends;
}).set(function (v) {
    // Setter function to set the friendCount property
    const friendCount = v.length;
    this.set('friendCount', friendCount);
});


const User = model('User', userSchema);
module.exports = User;