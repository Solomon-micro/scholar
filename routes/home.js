const {readFileSync, writeFile, writeFileSync}=require('fs');
const express=require('express');
const router=express.Router();
let register=require('../students/school.js')
router.use(express.urlencoded({extended: true}))
let school=JSON.parse(readFileSync('./students/school.json', err=>`problem with loading school data \n ${err}`));

router.get('/', (req, res)=>{
  console.log(req.url);
  res.render('index', {title: "Home Page"});
})

module.exports=router;