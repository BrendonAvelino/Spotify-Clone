const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: String,
  tracks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Track',
  }],
});

module.exports = mongoose.model('Playlist', playlistSchema);
