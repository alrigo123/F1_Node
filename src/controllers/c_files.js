
/* To build file 

const storage = multer.diskStorage({
    destination: path.join(__dirname, './public/img/uploads'),
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  })
  app.use(
    multer({
      storage: storage,
      dest: path.join(__dirname, './public/img/uploads'),
      limits: { filesize: 10000 },
      fileFilter: (req, file, cb, err) => {
        const filetype = /jpeg|jpg|png|gif/
        const mimetype = filetype.test(file.mimetype)
        const extname = filetype.test(path.extname(file.originalname))
        if (mimetype && extname) {
          return cb(null, true)
        } else {
          cb('Error: File must be a JPG, PNG, or GIF', err)
        }
      },
    }).single('photo_pilot'),
  )

  */