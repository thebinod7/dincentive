const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({ success: true, message: 'Users list' });
});

module.exports = router;
