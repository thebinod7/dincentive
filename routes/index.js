const router = require('express').Router();
const API_BASE = '/api/v1';

const projectRoutes = require('./project.routes.api');
const userRoutes = require('./user.routes.api');

router.get('/', (req, res) => {
	res.json({ success: true, message: 'Welcome home!' });
});

router.use(API_BASE + '/projects', projectRoutes);
router.use(API_BASE + '/users', userRoutes);

module.exports = router;
