const router   = require('express').Router();
const auth     = require('../middleware/auth');
const Progress = require('../models/Progress');

router.get('/', auth, async (req, res) => {
  try {
    const docs = await Progress.find({ userId: req.user.id });
    const result = {};
    docs.forEach(d => {
      result[d.questId] = { done: d.done, checks: Object.fromEntries(d.checks) };
    });
    res.json(result);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar progresso' });
  }
});

router.put('/:questId', auth, async (req, res) => {
  try {
    const { done, checks } = req.body;
    await Progress.findOneAndUpdate(
      { userId: req.user.id, questId: req.params.questId },
      { done: !!done, checks: checks || {} },
      { upsert: true, new: true }
    );
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Erro ao salvar progresso' });
  }
});

module.exports = router;
