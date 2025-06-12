const router = require('express').Router();
const ctrl   = require('../controllers/userController');

router.put('/', ctrl.signup);
router.post('/login', ctrl.login);
router.delete('/logout', ctrl.logout);

router.get('/attentes', ctrl.listPending);
router.post('/:id/valider', ctrl.validateUser);

router.post('/:id/toggleAdmin', ctrl.toggleAdmin);

router.get('/all', ctrl.listUsers);

router.get('/:id/friends', ctrl.listFriends);
router.post('/:id/friends', ctrl.addFriend);

router.post('/:id/requests', ctrl.sendFriendRequest);
router.get('/:id/requests', ctrl.listFriendRequests);
router.post('/:id/requests/:requesterId/accept', ctrl.acceptFriendRequest);
router.post('/:id/requests/:requesterId/decline', ctrl.declineFriendRequest);


router.get('/:id', ctrl.getProfile);

module.exports = router;
