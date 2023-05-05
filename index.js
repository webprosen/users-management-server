const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: 'prosen'},
    {id: 2, name: 'jakir'},
    {id: 3, name: 'john'},
    {id: 4, name: 'ridoy'},
    {id: 5, name: 'akash'}
]

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});