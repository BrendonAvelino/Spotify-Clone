const express = require('express');
const router = express.Router();
const Playlist = require('../models/Playlist');

// Criar Playlist
router.post('/', async (req, res) => {
  try {
    const playlist = new Playlist(req.body);
    await playlist.save();
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar playlist' });
  }
});

// Adicionar música à playlist
router.post('/:id/add-track', async (req, res) => {
  const { id } = req.params;
  const { trackId } = req.body;
  try {
    const playlist = await Playlist.findById(id);
    playlist.tracks.push(trackId);
    await playlist.save();
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar música à playlist' });
  }
});

module.exports = router;
