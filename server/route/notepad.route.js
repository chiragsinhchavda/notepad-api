const express = require('express');
const Note = require('../model/note.model')
const router = express.Router()

router.post('/add-note', async (req, res) => {
	try{
		const { body } = req
		const data = new Note({
			title: body.title,
			description: body.description
		})
		const noteData = await data.save()
		res.status(200).json(noteData)
	}catch(e){
		res.status(400).json({message: e.message})
	}
})

router.get('/get-all-notes', async (req, res) => {
	try{
		const allNotesData = await Note.find()
		res.json(allNotesData)
	}catch(e){
		res.status(500).json({message: e.message})
	}
})

router.get('/get-note-by-id/:id', async (req, res) => {
	try{
		const noteData = await Note.findById(req.params.id)
		res.json(noteData)
	}catch(e){
		res.status(500).json({message: e.message})
	}
})

router.put('/update-note/:id', async (req, res) => {
	try{
		const { body, params } = req
		//const isNoteAdded = await Note.findById(params.id)
		//if(isNoteAdded){
		//	const updatedNote = await Note.findByIdAndUpdate(params.id, payload, {new:true})
		//	res.send(updatedNote)
		//}else{
		//	res.status(500).json({message: 'Note id not found.'})
		//}
		const updatedNote = await Note.findByIdAndUpdate(params.id, body, {new:true})
		res.send(updatedNote)
	}catch(e){
		res.status(400).json({ message: error.message })
	}
})

router.get('/delete-note/:id', async (req, res) => {
	try{
		const { params } = req
		const deletedNote = await Note.findByIdAndDelete(params.id)
		res.send('Note Deleted Successfully.')
	}catch(e){
		res.status(400).json({message: e.message})
	}
})

module.exports = router;