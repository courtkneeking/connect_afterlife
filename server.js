var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var bcrypt = require('bcrypt-as-promised');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', 'dist')));


app.set('resources', path.join(__dirname, './resources'));
app.use(express.static('resources'));

mongoose.connect('mongodb://localhost/connect_afterlife');

var QuestionSchema = new mongoose.Schema({
    question: String
});
var Question = mongoose.model('Question', QuestionSchema);

var UserSchema = new mongoose.Schema({
    email: String
});
var User= mongoose.model('User', UserSchema);

////HERE 
app.post('/api/login', (req, res)=>{
    email = req.body.email;
    console.log(req.body)
    User.find({email: email}, (err, user)=>{
            // if(bcrypt.compareSync('somePassword', hash)) {} else {}
        if(err){
            res.json(err);
        }else{
            console.log(user)
            res.json(user)
        }
    })
})
/////
app.post('/api/register', (req, res)=>{
    newUser = new User(req.body);
    // let hash = bcrypt.hashSync('myPassword', 10);
    newUser.save((err, newUser)=>{
        if(err){
            res.json(err)
        }else{
            console.log(newUser)
            res.json(newUser)
        }
    })
})


app.get('/api/questions', (req, res) => {
    Question.find({}, (err, questions)=>{
        if(err){
            res.json(err);
        }else{
            console.log("server get questions",questions)
            res.json(questions)
        }
    })
});

app.post('/api/questions', (req, res) => {
    var newQuestion = new Question(req.body);
    newQuestion.save((err, newQuestion)=>{
        if(err){
            res.json(err)
        }else{
            res.json(newQuestion)
        }
    })
});

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

app.listen(8000, function(){
    console.log('8000')
});