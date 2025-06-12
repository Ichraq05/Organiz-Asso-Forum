const Message = require('../models/Message');

exports.createMessage = async (req, res) => {
  const { userId, title, content, replyTo, forum } = req.body;
  const msg = await Message.create({ userId, title, content, replyTo, forum });
  res.status(201).json({ status: 201, message: msg });
};

exports.listMessages = async (req, res) => {
  const filter = {};
  if (req.query.forum) filter.forum = req.query.forum;
  const msgs = await Message.find(filter)
    .sort('timestamp')
    .populate('userId','login firstname lastname');
  res.json({ status: 200, messages: msgs });
};

exports.searchMessages = async (req, res) => {
  const q = req.query.q;
  const msgs = await Message.find({
    $or: [
      { title:   new RegExp(q, 'i') },
      { content: new RegExp(q, 'i') }
    ]
  })
  .populate('userId', 'login firstname lastname');
  res.json({ status:200, messages: msgs });
};

exports.listUserMessages = async (req, res) => {
  const msgs = await Message.find({ userId: req.params.userId }).sort('-timestamp');
  res.json({ status:200, messages: msgs });
};

exports.deleteMessage = async (req, res) => {
  const msg = await Message.findById(req.params.id);
  if (!msg) return res.status(404).json({ status:404, message:'Message introuvable' });
  const { userId, isAdmin } = req.body;
  if (msg.userId.toString() !== userId && !isAdmin) {
    return res.status(403).json({ status:403, message:'Interdit' });
  }
  await msg.remove();
  res.json({ status:200, message:'Message supprimé' });
};
