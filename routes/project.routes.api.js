const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({ success: true, message: 'Project list' });
});

module.exports = router;
