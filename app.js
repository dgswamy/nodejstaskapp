var express=require('express');
var app=express();

//binding express app to port 5000

app.listen(5000,function(){
    console.log('Node server running at http://localhost:5000')

});

app.use('/node_modules',express.static(__dirname +'/node_modules'));
app.use('/style',express.static(__dirname+'/style'));

app.get('/',function(req,res){
    res.sendFile('home.html',{'root':__dirname+'/templates'});
});
app.get('/showSignInpage',function(req,res){
    res.sendFile("signin.html",{'root':__dirname +'/templates'});

});

app.get('/showSignUpPage',function(req,res){
    res.sendFile('signup.html',{'root':__dirname +'/templates'});
});