import Product from '../models/productModel.js'

export const products = async(req, res) => {
    try{
        const {productName, description, price} = req.body;

        const product = new Product({
            productName,
            description,
            price,
            userId: req.user.userId
        })
        await product.save();
        res.status(201).json(product)
    }catch (err) {
        console.error(err);
        res.status(500).send(`Server Error`)
    }
}