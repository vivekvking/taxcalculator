const express = require('express');
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));
const processor = require('./dad');
const port = process.env.PORT || 3000;

app.get('/',async(req,res)=>{
    res.render('home.ejs')
});

app.post('/',async(req,res)=>{
    let {
        i_igst,i_cgst,i_sgst,c_igst ,c_cgst,c_sgst,p_igst,p_cgst,p_sgst
    } = req.body;
    console.log(i_igst,i_cgst,i_sgst,c_igst ,c_cgst,c_sgst,p_igst,p_cgst,p_sgst)
    i_igst=parseInt(i_igst);i_cgst=parseInt(i_cgst);i_sgst=parseInt(i_sgst);c_igst=parseInt(c_igst);c_cgst=parseInt(c_cgst);c_sgst=parseInt(c_sgst);
    p_igst=parseInt(p_igst);p_cgst=parseInt(p_cgst);p_sgst=parseInt(p_sgst);
    let data = await processor(i_igst,i_cgst,i_sgst,c_igst ,c_cgst,c_sgst,p_igst,p_cgst,p_sgst);
    res.send({"Message":"Request successfull",data:data});
})

app.listen(port,()=>{
    console.log("Server started on port 3000");
})
