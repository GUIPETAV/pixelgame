const router  = require('express').Router();
const multer  = require('multer');
const path    = require('path');
const auth    = require('../middleware/auth');
const Comment = require('../models/Comment');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '_')}`)
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const ok = /\.(jpe?g|png|gif|webp)$/i.test(path.extname(file.originalname));
    cb(ok ? null : new Error('Apenas imagens são permitidas'), ok);
  }
});

router.get('/:questId', auth, async (req, res) => {
  try {
    const comments = await Comment.find({ questId: req.params.questId }).sort({ createdAt: 1 });
    res.json(comments);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar comentários' });
  }
});

router.post('/:questId', auth, upload.single('image'), async (req, res) => {
  try {
    const { text } = req.body;
    if (!text?.trim()) return res.status(400).json({ error: 'Texto é obrigatório' });

    const comment = await Comment.create({
      userId:   req.user.id,
      questId:  req.params.questId,
      author:   req.user.username,
      text:     text.trim(),
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message || 'Erro ao salvar comentário' });
  }
});

module.exports = router;
