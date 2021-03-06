const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

//import route from speakerRouter and quoteRouter
const speakerRouter = require('./routes/speakerRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/speakers', speakerRouter);

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})