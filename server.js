var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone = {
    title: 'articleone!gokhu',
    heading: 'Articleone',
    date: 'Sep 5 ,2016',
    content: 
    <p>
    this is the content of first article.
    </p>
};
function create Template (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var html template =
    <html>
    <head>
        <title>
            $(title)
        </title>
        <link href="/ui/style.css" role="stylesheet"/>
    </head>
    <body>
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>
            $(heading)
        </h3>
        <div>
            $(date)
        </div>
        <div>
            <p>
                $(content)
            </p>
        </div>
    </body>
</html>
;
return html template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.send(create template(articleone));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
