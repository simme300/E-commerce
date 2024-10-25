import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Now we are at the user');
});

router.get('/one', (req, res) => {
	res.send('Now we are at user one');
});

export default router;
