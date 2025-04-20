import userModel from '../models/userModel.js'
 

//add items to cart
const addToCart = async(req,res) => {
    try {
        let userData = await userModel.findById({_id:req.body.userId});
        let cart = await userData.cart || {};
        if(!cart[req.body.itemId])
        {
            cart[req.body.itemId] = 1;
        }
         else{
            cart[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cart});
        res.json({success:true,message:"Added to Cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error 1"})
    }

}

//remove items from cart
const removefromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cart = await userData.cart || {};
        if (cart[req.body.itemId]>0) {
            cart[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cart});
        res.json({success:true,message:"Removed From Cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//fetch user cart data 
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cart = await userData.cart || {};
        res.json({success:true,cart})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:Error})
    }
}

export { addToCart, removefromCart, getCart }
