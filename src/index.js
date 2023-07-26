const cors = require('cors');
const express = require('express');
const app = express();
const port = 8000;
const connectDb = require('./mongoDb/db');
const notesRoutes = require('./routes/notes')

connectDb();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json())
app.use('/notes', notesRoutes);

app.get('/', (res: Request<P, ResBody, ReqBody, ReqQuery, Locals>, res: Response<ResBody, Locals>) => {
}


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})