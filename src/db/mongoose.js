const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
  
})

const User = mongoose.model("users",{

    name:{
        type:String
    },
    age:{
        type:Number
    }

})

const Tasks = mongoose.model('tasks',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const task1= new Tasks({
    description:"start exercising after rest",
    completed:false
})

task1.save().then(() => {
  console.log(task1);
}).catch((error) => {
  console.log(error);
})
// const user1 = new User({
//     name:'mathew',
//     age:22
// })

// user1.save().then(()=>{
//     console.log(user1);
// }).catch((error)=>{
//     console.log('error',error);
// })


    