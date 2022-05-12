var app = require('./app');
app.listen(app.get('port'),()=>{
    console.warn(`Server is connected with port : ${app.get('port')}`);
})