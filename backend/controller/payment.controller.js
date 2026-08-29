const razorpay = require("../services/service");
const crypto = require("crypto");

const createOrder = async (req, res) => {
    try {

        const options = {
            amount: 5 * 100,
            currency: "INR",
            receipt: "rakhi_" + Date.now()
        };

        const order = await razorpay.orders.create(options);

        res.json({
            success: true,
            order,
            key: process.env.RAZORPAY_KEY_ID
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Order creation failed"
        });
    }
};


const verifyPayment = async (req, res) => {
    try {

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        const body =
            razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature =
            crypto
                .createHmac(
                    "sha256",
                    process.env.RAZORPAY_KEY_SECRET
                )
                .update(body)
                .digest("hex");

        if (expectedSignature === razorpay_signature) {

            return res.json({
                success: true,
                message: "Payment successful"
            });
        }

        res.status(400).json({
            success: false,
            message: "Payment verification failed"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Verification error"
        });
    }
};


module.exports = {
    createOrder,
    verifyPayment
};