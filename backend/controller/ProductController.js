import { promise } from "bcrypt/promises.js";
import { v2 as cloudinary } from 'cloudinary';
import productmodel from "../models/productmodel.js";

// function for add product
const addproduct = async (req, res) => {
    try {
        const { name, description, price, category, subcategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1 &&  req.files.image1[0];
        const image2 = req.files.image2 &&  req.files.image2[0];
        const image3 = req.files.image3 &&  req.files.image3[0];
        const image4 = req.files.image4 &&  req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesurl = await Promise.all(
            images.map( async (data)=>{
                let result = await cloudinary.uploader.upload(data,{resource_type:"image"});
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subcategory,
            bestseller: bestseller === 'true' ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesurl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productmodel(productData);
        await product.save();

        res.json({ success: true, message: "Product Added" });

        // console.log( name, description, price, category, subcategory, sizes, bestseller );
        // console.log(imagesurl);
        // res.json({});
    }
    catch (e) {
        res.json({ success: false, message: e.message });
    }
}

// function for list products
const listproduct = async (req, res) => {
    try {
        const products = await productmodel.find({});
        res.json({ success: true, products });
    }
    catch (e) {
        console.log(e);
        res.json({ success: false, message: e.message });
    }
}

// function for removing product
const removeproduct = async (req, res) => {
    try {
        await productmodel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product Removed" });
    }
    catch (e) {
        console.log(e);
        res.json({ success: false, message: e.message });
    }
}

// function for single product info
const singleproduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const productinfo = await productmodel.findById(productId);
        res.json({success: true, productinfo})
    } catch (e) {

        console.log(e);
        res.json({ success: false, message: e.message });
    }
}


export { addproduct, listproduct, removeproduct, singleproduct }
