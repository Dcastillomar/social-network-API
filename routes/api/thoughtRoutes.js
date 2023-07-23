const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)

// /api/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)

// /api/thought/:thoughtId/reactions/:ReactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;