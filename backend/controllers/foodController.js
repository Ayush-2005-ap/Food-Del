import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add foodItem
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}

const ListFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}
//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })


        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }

}

// const removeFood = async (req, res) => {
//     try {
//         if (!req.body.id) {
//             return res.status(400).json({ success: false, message: "Food ID required" });
//         }

//         const food = await foodModel.findById(req.body.id);
//         if (!food) {
//             return res.status(404).json({ success: false, message: "Food not found" });
//         }

//         // Delete image file if it exists
//         if (food.image) {
//             fs.unlink(`uploads/${food.image}`, (err) => {
//                 if (err) console.error("File deletion error:", err);
//             });
//         }

//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({ success: true, message: "Food Removed" });

//     } catch (error) {
//         console.error("Error removing food:", error);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };


export { addFood, ListFood, removeFood }