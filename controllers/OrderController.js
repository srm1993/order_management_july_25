const OrderMaster = require('../models/Order_Master.js');
const ProductMaster = require('../models/product_master.js');
exports.landingPage = (req, res) => {
    res.render('index');
}
exports.fetchProduct = async (req, res) => {
    let ProdName = req.query.ProdName;
    const product = await ProductMaster.findOne({ ProdName });
    return res.json(product);
}
exports.insertOrder = async (req, res) => {
    const { OrderDate, ProdId, OrderQty, ProdRate, OrderValue } = req.body;
    const newOrder = new OrderMaster({
        OrderDate,
        ProdId,
        ProdRate,
        OrderQty,
        OrderValue
    })
    await newOrder.save();
    res.json('Order Placed Successfully');
}
exports.fetchOrders = async (req, res) => {
    const orders = await OrderMaster.find().populate('ProdId');
    res.json(orders);
}
exports.deleteOrder = async (req, res) => {
    const id = req.params.id;
    await OrderMaster.findByIdAndDelete(id);
    res.json('Order Deleted Successfully');
}
exports.fetchOrderById = async (req, res) => {
    const id = req.params.id;
    const order = await OrderMaster.findById(id).populate('ProdId');
    res.json(order);
}
exports.updateOrder = async (req, res) => {
    const { id, OrderQty, OrderValue } = req.body;
    await OrderMaster.findByIdAndUpdate(id, {
        OrderQty,
        OrderValue
    });
    res.json('Order Updated Successfully');
}
