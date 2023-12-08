const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try{
		res.json({message: 'Notepad api root.'})
	}catch(e){
		res.status(500).json({message: e.message})
	}
})

module.exports = router