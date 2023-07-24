const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({

    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

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
});
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: {
        type: Date, default: Date.Now,
    },
    username: { type: String, required: true },
    reactions: [ reactionSchema
    //     {
    //     type: Schema.Types.ObjectId,
    //     ref: 'reactionSchema'
    // }
]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);



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