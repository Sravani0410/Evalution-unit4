const express=require("express")
const app =express()
 app.use(logger)
 

app.get("/books",(req,res)=>{
    console.log("books is working")
    return res.send({route:"/books"})
})
app.get("/libraries",checkPermission,(req,res)=>{
    //console.log("libraries is working")
    return res.send({route:"/libraries",permission:req.checkPermission})
})
app.get("/authors",checkPermission,(req,res)=>{
    // console.log("authors is working")
    return res.send({route:"/authors",permission:req.checkPermission})
})

function logger(req,res,next){
  if(req.path=="/books"){
      console.log("books path working");
      
  }
  else if(req.path=="/libraries"){
      console.log("libraries path is working")
      
  }
  else if(req.path=="/authors"){
    console.log("authors path is working");
    
}
next();
}


function checkPermission(req,res,next){
   if(req.path=="/libraries"){
      req.checkPermission=true
   }
   else if(req.path=="/authors"){
    req.checkPermission=true
   }
   else{
       req.checkPermission="something"
   }
   next();
}
app.listen(2768,()=>{
    console.log("Lisenting to 2768 port")
})