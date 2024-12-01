const express = require('express');
const router = express.Router();
const Track = require('../models/Track');

// Buscar músicas por nome, artista ou álbum
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const tracks = await Track.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { artist: { $regex: query, $options: 'i' } },
        { album: { $regex: query, $options: 'i' } },
      ]
    });
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar músicas' });
  }
});

module.exports = router;
