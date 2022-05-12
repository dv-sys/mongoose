const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dharm2302:123@cluster0.zvlau.mongodb.net/employee?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(()=>{
    console.warn('DB Connected..!');
})