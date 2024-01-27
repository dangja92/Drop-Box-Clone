require('dotenv').config();

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const FormData = require('form-data');
const nodePath = require('path');

const fs = require('fs');
const fetch = require('node-fetch');

const watch = require('node-watch');
const SYNC_OUT_DIR = process.env.SYNC_OUT_DIR;
const SYNC_IN_DIR = process.env.SYNC_IN_DIR;
const REMOTE_URL = process.env.REMOTE_URL;
const PORT = process.env.PORT;

const app = express();

watch(SYNC_OUT_DIR, { recursive: true }, async function(evt, name) {
  const file = fs.createReadStream(name);
  const form = new FormData();

  form.append('file', file);

  await fetch(`${REMOTE_URL}/files`, {
    method: 'POST', 
    body: form,
  });

  fs.unlinkSync(name);
});

app.post('/files', upload.single('file'), function(req, res, next) {
    const { originalname, path } = req.file;
    const file = fs.readFileSync(path);
    fs.writeFileSync(nodePath.join(SYNC_IN_DIR, originalname), file);
    fs.unlinkSync(path);
    res.status(200);
    res.send('Success!');
});

app.listen(PORT);

