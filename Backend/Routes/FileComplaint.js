const express = require('express');
const User = require('../Models/User');
const Complaint = require('../Models/Complaint');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../Middleware/fetchuser');
const upload = require('../Middleware/multer_upload');

// router.post('/complaint', upload.single("ComplaintProof") ,async (req, res) => {
//   try {

//     res.json(req.file)

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// })

router.post('/complaint', fetchuser, upload.single("ComplaintProof"), [
  body('title', 'Enter a valid title').isLength({ min: 5 }),
  body('description', 'Enter a valid description').isLength({ min: 10 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    const { title, description } = req.body;
    const complaint = new Complaint({
      title, description, user: req.user.id, upload_file_path: req.file.path
    })
    const savedComplaint = await complaint.save();

    res.send(savedComplaint)

    console.log(req.file)

    return res.status(200).send("uploaded");

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router