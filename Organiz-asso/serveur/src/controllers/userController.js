const User = require('../models/User');

exports.signup = async (req, res) => {
  const { login, password, confirm, firstname, lastname } = req.body;
  if (!login || !password || password !== confirm) {
    return res.status(400).json({ status: 400, message: 'Champs invalides' });
  }
  if (await User.exists({ login })) {
    return res.status(409).json({ status: 409, message: 'Login déjà utilisé' });
  }
  const newUser = await User.create({ login, password, firstname, lastname });
  res.status(201).json({
    status: 201,
    message: 'Inscription reçue, en attente de validation',
    user: newUser
  });
};

exports.login = async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ login, password });
  if (!user) {
    return res.status(401).json({ status: 401, message: 'Identifiants invalides' });
  }
  if (!user.member) {
    return res.status(403).json({
      status: 403,
      message: 'Inscription en attente de validation'
    });
  }
  res.json({ status: 200, user });
};

exports.logout = (req, res) => {
  res.json({ status: 200, message: 'Déconnecté' });
};

exports.listUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json({ status: 200, users });
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) {
    return res.status(404).json({ status: 404, message: 'Utilisateur non trouvé' });
  }
  res.json({ status: 200, user });
};

exports.listPending = async (req, res) => {
  const users = await User.find({ member: false }).select('-password');
  res.json({ status: 200, users });
};

exports.validateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { member: true },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ status: 404, message: 'Utilisateur non trouvé' });
  }
  res.json({ status: 200, message: 'Utilisateur validé', user });
};

exports.toggleAdmin = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ status: 404, message: 'Utilisateur non trouvé' });
  }
  user.admin = !user.admin;
  await user.save();
  res.json({ status: 200, message: 'Statut administrateur modifié', user });
};

exports.listFriends = async (req, res) => {
  const me = await User.findById(req.params.id).populate(
    'friends',
    'login firstname lastname profilePhoto'
  );
  res.json({ status: 200, friends: me.friends });
};

exports.addFriend = async (req, res) => {
  const me = await User.findById(req.params.id);
  const friend = await User.findOne({ login: req.body.friendLogin });
  if (!friend) {
    return res.status(404).json({ status: 404, message: 'Utilisateur introuvable' });
  }
  me.friends.addToSet(friend._id);
  await me.save();
  res.json({ status: 200, message: 'Ami ajouté', friends: me.friends });
};

exports.sendFriendRequest = async (req, res) => {
  const target = await User.findById(req.params.id);
  if (!target) return res.status(404).json({ status:404, message:'Cible introuvable' });
  const fromId = req.body.fromId;
  if (target.friendRequests.includes(fromId) || target.friends.includes(fromId)) {
    return res.status(400).json({ status:400, message:'Déjà demandé ou déjà amis' });
  }
  target.friendRequests.push(fromId);
  await target.save();
  res.json({ status:200, message:'Demande envoyée' });
};

exports.listFriendRequests = async (req, res) => {
  const me = await User.findById(req.params.id).populate(
    'friendRequests',
    'login firstname lastname'
  );
  res.json({ status:200, requests: me.friendRequests });
};

exports.acceptFriendRequest = async (req, res) => {
  const me = await User.findById(req.params.id);
  const { requesterId } = req.params;
  me.friendRequests = me.friendRequests.filter(id => id.toString() !== requesterId);
  me.friends.addToSet(requesterId);
  await me.save();
  await User.findByIdAndUpdate(requesterId, {
    $addToSet: { friends: me._id }
  });
  res.json({ status:200, message:'Ami accepté' });
};

exports.declineFriendRequest = async (req, res) => {
  const me = await User.findById(req.params.id);
  const { requesterId } = req.params;
  me.friendRequests = me.friendRequests.filter(id => id.toString() !== requesterId);
  await me.save();
  res.json({ status:200, message:'Demande refusée' });
};
