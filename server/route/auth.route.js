const User = require('../model/user.model')
const express = require('express');
const router = express.Router()

router.post('/register', async (req, res) => {
	try {
		const { body } = req
		const data = new User({
			email: body.email,
			password: body.password
		})
		const userData = await data.save()
		if(userData){
			res.status(200).json({data: userData, message: 'Registration Successfull'})
		}else{
			res.json({message: 'Registration Failed'})
		}
	} catch (e) {
		res.status(400).json({ message: e.message })
	}
})

router.post('/login', async (req, res) => {
	try {
		const { body } = req
		const data = await User.findOne({ email: body.email })
		if (data) {
			if (body.password === data.password) {
				data.lastLoggedInAt = new Date()
				data.updatedAt = new Date()
				data.save()
				res.status(200).json({ data: data, message: 'Login Successfull' })
			} else {
				res.send({ message: 'Invalid Data' })
			}
		} else {
			res.send({ message: 'User not found' })
		}
	} catch (e) {
		res.status(400).json({ message: e.message })
	}
})

module.exports = router;