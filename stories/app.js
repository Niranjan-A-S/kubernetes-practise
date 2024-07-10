const path = require('path');
const fs = require('fs');

const express = require('express');

const app = express();

const storyDir = process.env.STORY_FOLDER;
const filePath = path.join(__dirname, storyDir, 'text.txt');

app.use(express.json());

app.get('/story', (req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to open file.' });
        }
        res.status(200).json({ story: data.toString() });
    });
});

app.post('/story', (req, res) => {
    const newText = req.body.text;
    if (newText.trim().length === 0) {
        return res.status(422).json({ message: 'Text must not be empty!' });
    }
    fs.appendFile(filePath, newText + '\n', (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        res.status(201).json({ message: 'Text was stored!' });
    });
});

app.get('/error', () => {
    process.exit(1);
})

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log('Application started running')
});