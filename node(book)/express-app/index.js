let express = require('express');
let ejs = require('ejs');

let app = express();
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const data = {
    'aaa': 'aaa@aaa',
    'bbb': 'bbb@bbb',
    'ccc': 'ccc@ccc',
    'ddd': 'ddd@ddd',
};

app.get('/', (req, res) => {
    let msg = 'インデックス';
    res.render('index.ejs', 
    {
        title: 'Index',
        content: msg,
        data: data,
    });
});


app.listen(3000, () => {
    console.log('Start server port:3000');
});
