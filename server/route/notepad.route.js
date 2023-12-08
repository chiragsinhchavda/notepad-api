const express = require('express');
const Note = require('../model/note.model')
const router = express.Router()

router.post('/add-note', async (req, res) => {
	try {
		const { body } = req
		const data = new Note({
			title: body.title,
			description: body.description
		})
		const noteData = await data.save()
		res.status(200).json(noteData)
	} catch (e) {
		res.status(400).json({ message: e.message })
	}
})

router.get('/get-all-notes', async (req, res) => {
	try {
		const allNotesData = await Note.find()
		if (allNotesData.length) {
			res.json(allNotesData)
		} else {
			res.json([])
		}
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
})

router.get('/get-note-by-id/:id', async (req, res) => {
	try {
		const noteData = await Note.findById(req.params.id)
		res.json(noteData)
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
})

router.put('/update-note/:id', async (req, res) => {
	try {
		const { body, params } = req
		const updatedNote = await Note.findByIdAndUpdate(params.id, body, { new: true })
		if (updatedNote) {
			res.send(updatedNote).status(200)
		} else {
			res.status(500).json({ message: 'Note id not found.' })
		}
	} catch (e) {
		res.status(400).json({ message: error.message })
	}
})

router.delete('/delete-note/:id', async (req, res) => {
	try {
		const { params } = req
		console.log('params : ', params)
		const deletedNote = await Note.findByIdAndDelete(params.id)
		res.send('Deleted Successfully.')
	} catch (e) {
		res.status(400).json({ message: e.message })
	}
})

module.exports = router;