const express = require ('express');
const multer = require('multer');
const upload = multer({dest: './prospectoFiles'})

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/tmp/my-uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage })


const router = express.Router();
// importar controladores
const { create, list, read, update, remove, uploadFile} = require('../controllers/prospecto');

router.post('/prospecto', upload.single('file'), create);
router.get('/prospectos', list);
router.get('/prospecto/:_id', read);
router.put('/prospecto/:_id', update);
router.post('/uploadFiles/:_id', upload.single('file'), uploadFile);

// router.post('prospect/sendemail', send);

module.exports = router;