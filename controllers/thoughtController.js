const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    //get all Thoughts
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get a user by ID
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thoughts with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new user
    async createThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body)
            const userData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thoughtData._id } },
                { new: true }
            );
            if (!userData) {
                return res.status(404).json({ message: 'Error with this id' });
            }

            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'Error finding this id' });
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'Error finding this id' });
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },


    async addReaction(req, res) {
        try {
            const reactionData = await req.body;
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: reactionData } },
                { runValidators: true, new: true }
            )
            if (!thought) {
                return res.status(404).json({ message: " Error finding this id" });
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            )
            if (!thought) {
                return res.status(404).json({ message: " Error finding this id" });
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

};