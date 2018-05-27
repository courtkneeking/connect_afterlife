var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var bcrypt = require('bcrypt-as-promised');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', 'dist')));


app.set('resources', path.join(__dirname, './resources'));
app.use(express.static('resources'));


app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

mongoose.connect('mongodb://localhost/connect_afterlife');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,

});
var QuestionSchema = new mongoose.Schema({
    question: String
});

var User= mongoose.model('User', UserSchema);
var Question = mongoose.model('Question', QuestionSchema);

////////login component 
app.post('/api/login', (req, res)=>{
    console.log(" req.body: ", req.body);
    User.findOne({email:req.body.email}, (err, user) => {
        if (err) {
            console.log("error")
            res.json(err);
        }
        else {
            req.session.email = user.email;
            res.json(user)
        }
    })
    
})

app.post('/api/register', (req, res)=>{
    newUser = new User(req.body);
    newUser.save((err, newUser)=>{
        if(err){
            res.json(err)
        }else{
            res.json(newUser)
            console.log(newUser)
        }
    })
})

/////dashboard component
app.get('/api/user', (req, res)=>{
    user = User.findOne({email: req.session.email}, (err, user)=>{
        if(err){
            res.json(err);
        }else{
            console.log('dashboard compon, session user', req.session.email)
            res.json(user)
        }
    })
})
app.get('/api/logout', (req, res)=>{
})
////////question component 

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


//// for me 
app.get('/users', (req, res)=>{
    users = User.find({}, (err, users)=>{
        if(err){
            console.log(err);
        }else{
            console.log(users)
        }
    });
})

app.get('/session', (req, res)=>{
    console.log("sessions" , req.session.id);
    res.redirect('/')
})  
//////

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

app.listen(8000, function(){
    console.log('8000')
});