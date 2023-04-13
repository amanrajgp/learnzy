const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const axios=require("axios");
const bodyparser=require("body-parser");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const session=require("express-session");
const passportlocalmongoose=require("passport-local-mongoose");
const LocalStrategy = require('passport-local').Strategy;



//importing data from databases
const studentsdata=require("../database/student_database")
const parentsdata=require("../database/parent_database")
const teachersdata=require("../database/teachers_database")

















app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());








//using session and passport 

app.use(session({
    secret:"Learnzy",
    resave:false,
    saveUninitialized:false,
}));


app.use(passport.initialize());
app.use(passport.session());



mongoose.connect("mongodb://localhost:27017/studentsDB");




//schemas

//student schema-->


const studentSchema=new mongoose.Schema({
    
    name: String,
    roll_no: String,
    password: String,
    class: String,
    section: String,
    parent: String,
    subjects: [String, String, String],
    teachers: [String, String, String],
    dob:String,
    address: String,
    mob_no:String
  


});


//parent schema-->


const parentSchema=new mongoose.Schema({
    name: String,
    password: String,
    mob_no: String,
    child_name: String,
    address: String
});



//teacher schema-->

const teacherSchema= new mongoose.Schema({
    name: String,
    subjects: [String, String],
    class: String,
    password: String,
    mob_no: String,
    address: String,
    students: [String, String, String]
})


const adminSchema=new mongoose.Schema({
    name:String,
    password:String
});





const loginSchema=new mongoose.Schema({
    username:String,
    password:String
});

loginSchema.plugin(passportlocalmongoose);


const Login = new mongoose.model('Login', loginSchema);



passport.serializeUser(Login.serializeUser());
passport.deserializeUser(Login.deserializeUser());



//creating model and storing collections in database


const Student =new mongoose.model("Student",studentSchema);
const Teacher=new mongoose.model("teacher",teacherSchema);
const Parent=new mongoose.model("parent",parentSchema);
const Admin=new mongoose.model("Admin",adminSchema);

// Admin.collection.insertOne({
//     name:"admin",
//     password:"admin@123"

// });



//creating collections for all database-->


// for (let i=0;i<parentsdata.parents_data.length;i++){
//     Parent.collection.insertOne({
//         name: parentsdata.parents_data[i].name,
//         password: parentsdata.parents_data[i].password,
//         mob_no: parentsdata.parents_data[i].mob_no,
//         child_name: parentsdata.parents_data[i].child_name,
//         address: parentsdata.parents_data[i].address
//     })
    







//for student login


let student_data;
let student_login_data;
app.post("/StudentLogin",function(req,res){

    const given_name=req.body.username
    const given_password=req.body.password
    console.log(given_name,given_password);


    Student.findOne({name:given_name,password:given_password}).then(

        
        function(student){
            if (student===null){
                student_login_data=false
                console.log("student not found");
                res.redirect("/StudentLogin")
            }else{
                console.log("student found");
                student_data=student
                Login.find({username:given_name,password:given_password}).then(
                    function(user){
                        console.log("user:",user);
                       
                        if(user.length==0){
                            console.log("no login detail found");


                            Login.collection.insertOne({
                                username:given_name,
                                password:given_password
                            });
                            


                            Login.register({username:given_name},given_password,function(err,new_user){
                                if(err){
                                    console.log("not registering:",err);
                                    student_login_data=false
                
                                }else{
                
                                    console.log("registration successfull");
                                    console.log("student dat inside register:",student_data);
                                    passport.authenticate("local")(req,res,function(){
                                        student_login_data=true;
                                        
                                        

                                    })
                                }
                            })

                        }else{
                            student_login_data=true
                            res.redirect("/StudentLogin")

                            console.log("already registered");
                        }
                    }
                )
                    
            
                
                


            
            
            
                const new_login=new Login({
                    username:given_name,
                    password:given_password
                });

                req.login(new_login,function(err){
                    if(err){
                        console.log(err);
                    }else{
                        passport.authenticate("local")(req,res,function(){
                            
                            console.log("login successful");
                            student_login_data=false;
                            
                            
                        })
                    }
                })
                    
                }
            
            
            
            
            
            }
            ).catch((err)=>{
        console.log(err);
    });


    

}).get("/StudentLogin",cors(),function(req,res){
    console.log("sending data in /StudentLogin",student_login_data);
    res.send(student_login_data)
    
}).get("/Student",function(req,res){
    // console.log("sending data to /student",student_data);
    res.send(student_data)
    // if(req.isAuthenticated()){
    //     console.log("authentication succesful /student");
        
        
    //     res.send(student_data)
    // }else{
    //     student_data=false
        
        
    // }


})



//for parents login-->

let parent_data;
let parent_login_data;
app.post("/ParentLogin",function(req,res){

    const given_name=req.body.username
    const given_password=req.body.password
    console.log(given_name,given_password);


    Parent.findOne({name:given_name,password:given_password}).then(

        
        function(parent){
            if (parent===null){
                parent_login_data=false
                console.log("parent not found");
                res.redirect("/parentLogin")
            }else{
                console.log("parent found");
                parent_data=parent
                Login.find({username:given_name,password:given_password}).then(
                    function(user){
                        console.log("user:",user);
                       
                        if(user.length==0){
                            console.log("no login detail found");


                            Login.collection.insertOne({
                                username:given_name,
                                password:given_password
                            });
                            


                            Login.register({username:given_name},given_password,function(err,new_user){
                                if(err){
                                    console.log("not registering:",err);
                                    parent_login_data=false
                
                                }else{
                
                                    console.log("registration successfull");
                                    console.log("student dat inside register:",parent_data);
                                    passport.authenticate("local")(req,res,function(){
                                        parent_login_data=true;
                                        
                                        

                                    })
                                }
                            })

                        }else{
                            parent_login_data=true
                            res.redirect("/ParentLogin")

                            console.log("already registered");
                        }
                    }
                )
                    
            
                
                


            
            
            
                const new_login=new Login({
                    username:given_name,
                    password:given_password
                });

                req.login(new_login,function(err){
                    if(err){
                        console.log(err);
                    }else{
                        passport.authenticate("local")(req,res,function(){
                            
                            console.log("login successful");
                            parent_login_data=false;
                            
                            
                        })
                    }
                })
                    
                }
            
            
            
            
            
            }
            ).catch((err)=>{
        console.log(err);
    });


    

}).get("/ParentLogin",cors(),function(req,res){
    console.log("sending data in /StudentLogin",parent_login_data);
    res.send(parent_login_data)
    
}).get("/Parent",function(req,res){
    // console.log("sending data to /student",student_data);
    res.send(parent_data)
    // if(req.isAuthenticated()){
    //     console.log("authentication succesful /student");
        
        
    //     res.send(student_data)
    // }else{
    //     student_data=false
        
        
    // }


})



//for teacher login-->


let teacher_data;
let teacher_login_data;
app.post("/TeacherLogin",function(req,res){

    const given_name=req.body.username
    const given_password=req.body.password
    console.log(given_name,given_password);


    Teacher.findOne({name:given_name,password:given_password}).then(

        
        function(teacher){
            if (teacher===null){
                teacher_login_data=false
                console.log("teacher not found");
                res.redirect("/TeacherLogin")
            }else{
                console.log("teacher found");
                teacher_data=teacher
                Login.find({username:given_name,password:given_password}).then(
                    function(user){
                        console.log("user:",user);
                       
                        if(user.length==0){
                            console.log("no login detail found");


                            Login.collection.insertOne({
                                username:given_name,
                                password:given_password
                            });
                            


                            Login.register({username:given_name},given_password,function(err,new_user){
                                if(err){
                                    console.log("not registering:",err);
                                    teacher_login_data=false
                
                                }else{
                
                                    console.log("registration successfull");
                                    console.log("Teacher data inside register:",teacher_data);
                                    passport.authenticate("local")(req,res,function(){
                                        teacher_login_data=true;
                                        
                                        

                                    })
                                }
                            })

                        }else{
                            teacher_login_data=true
                            res.redirect("/TeacherLogin")

                            console.log("already registered");
                        }
                    }
                )
                    
            
                
                


            
            
            
                const new_login=new Login({
                    username:given_name,
                    password:given_password
                });

                req.login(new_login,function(err){
                    if(err){
                        console.log(err);
                    }else{
                        passport.authenticate("local")(req,res,function(){
                            
                            console.log("login successful");
                            teachert_login_data=false;
                            
                            
                        })
                    }
                })
                    
                }
            
            
            
            
            
            }
            ).catch((err)=>{
        console.log(err);
    });


    

}).get("/TeacherLogin",cors(),function(req,res){
    console.log("sending data in /TeacherLogin",teacher_login_data);
    res.send(teacher_login_data)
    
}).get("/Teacher",function(req,res){
    // console.log("sending data to /student",student_data);
    res.send(teacher_data)
    // if(req.isAuthenticated()){
    //     console.log("authentication succesful /student");
        
        
    //     res.send(student_data)
    // }else{
    //     student_data=false
        
        
    // }


})


// for Admin login -->


let admin_data;
let admin_login_data;
app.post("/AdminLogin",function(req,res){

    const given_name=req.body.username
    const given_password=req.body.password
    console.log(given_name,given_password);


    Admin.findOne({name:given_name,password:given_password}).then(

        
        function(admin){
            if (admin===null){
                admin_login_data=false
                console.log("admin not found");
                res.redirect("/AdminLogin")
            }else{
                console.log("admin found");
                admin_data=admin
                Login.find({username:given_name,password:given_password}).then(
                    function(user){
                        console.log("user:",user);
                       
                        if(user.length==0){
                            console.log("no login detail found");


                            Login.collection.insertOne({
                                username:given_name,
                                password:given_password
                            });
                            


                            Login.register({username:given_name},given_password,function(err,new_user){
                                if(err){
                                    console.log("not registering:",err);
                                    admin_login_data=false
                
                                }else{
                
                                    console.log("registration successfull");
                                    console.log("Teacher data inside register:",admin_data);
                                    passport.authenticate("local")(req,res,function(){
                                        admin_login_data=true;
                                        
                                        

                                    })
                                }
                            })

                        }else{
                            admin_login_data=true
                            res.redirect("/AdminLogin")

                            console.log("already registered");
                        }
                    }
                )
                    
            
                
                


            
            
            
                const new_login=new Login({
                    username:given_name,
                    password:given_password
                });

                req.login(new_login,function(err){
                    if(err){
                        console.log(err);
                    }else{
                        passport.authenticate("local")(req,res,function(){
                            
                            console.log("login successful");
                            admin_login_data=false;
                            
                            
                        })
                    }
                })
                    
                }
            
            
            
            
            
            }
            ).catch((err)=>{
        console.log(err);
    });


    

}).get("/AdminLogin",cors(),function(req,res){
    console.log("sending data in /adminLogin",admin_login_data);
    res.send(admin_login_data)
    
}).get("/Admin",function(req,res){
    // console.log("sending data to /student",student_data);
    res.send(admin_data)
    // if(req.isAuthenticated()){
    //     console.log("authentication succesful /student");
        
        
    //     res.send(student_data)
    // }else{
    //     student_data=false
        
        
    // }


})

































app.listen(3001,function(req,res){
    console.log("server is running on port 3001");
})