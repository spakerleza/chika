const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URI , {
    useUnifiedTopology: true , 
    useNewUrlParser:true, 
    useUnifiedTopology: true 
})



