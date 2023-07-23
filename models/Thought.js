const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: {
        type: Date, default: Date.Now,
        required: true,
    },
    username: { type: String, required: true },
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'reaction'
    }]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const reactionSchema = new Schema({
    reactionId: Schema.Types.ObjectId,
    reactionBody: {
        type: String, required: true, maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, default: Date.Now
    }
})

thoughtSchema.virtual('reactionCount').get(function () {
    // Return the reactions array
    return this.reactions;
}).set(function (v) {
    // Setter function to set the reactionCount property
    const reactionCount = v.length;
    this.set('reactionCount', reactionCount);
});



const Thought = model('Thought', thoughtSchema);
module.exports = Thought;