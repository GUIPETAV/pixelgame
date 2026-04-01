const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const User   = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });

    const exists = await User.findOne({ $or: [{ username }, { email }] });
    if (exists)
      return res.status(400).json({ error: 'Usuário ou e-mail já cadastrado' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hash });
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, username: user.username });
  } catch {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ error: 'Senha incorreta' });

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, username: user.username });
  } catch {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
