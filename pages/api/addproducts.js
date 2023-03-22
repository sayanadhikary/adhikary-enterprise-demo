import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import { imageConfigDefault } from "next/dist/shared/lib/image-config"
import { sanitizeFilter } from "mongoose"

const handler= async (req, res)=> {
    if (req.method == 'POST'){
        for(let i=0; i<req.body.length; i++){
        let p = new Product({
            title : req.body[i].title,
            slug : req.body[i].slug,
            desc : req.body[i].desc,
            img : req.body[i].img, 
            size : req.body[i].size, 
            availableQty : req.body[i].availableQty,
            price : req.body[i].price
        })
        await p.save()
    }
    res.status(200).json({success: "success"})
    }
    else{
        res.status(400).json({error: "This Method is not allowed"})
    }
  
  }

  export default connectDb(handler);