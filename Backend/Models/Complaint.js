const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComplaintSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    upload_file_path:{
        type : String,
        required:true,
    }
  });
  const Complaint = mongoose.model('Complaint', ComplaintSchema);
  module.exports = Complaint;