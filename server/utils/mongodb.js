const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kgh:0000@cluster-0.zgplc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log("MongoDB Connected!");
}).catch(err=> {
  console.log(err);
});