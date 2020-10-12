//step 1create object express
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
//step 2 routing
// IT students
const itStudents
=[
{id:61, name:'Suchada'},

{id:62, name:'Narawit'}
];
// CE students
const ceStudents
=[{id:71, name:'Chonticha'},

{id:72, name:'Kiattiphom'}];
// major
const allMajors={
    'it'
: itStudents,
'ce': ceStudents
};

// route1
app.get('/api/:major',(req,res,next)=>{

const major= req.params.major.toLowerCase();
if(major=='it'){
const jsonString= JSON.stringify(itStudents);

req.myobj= jsonString;
next();
}else if
(major =='ce'){
const jsonString= JSON.stringify(ceStudents);
req.myobj= jsonString;
next();
}else{
res.send('Major not found!!!');
}
},(req,res)=>{
    req.myobj +=' End of Data';

res.send(req.myobj);
});
//step 3 listen

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
    });