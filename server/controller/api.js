const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const { sendEmail } = require("../utils/sendEmail");

require('dotenv').config();
const SECRET_KEY = 'process.env.SECRET_KEY';
const bookModel = require('../models/bookSchema');
const User = require('../models/userSchema');

const register = async (req, res) => {
    const { name, email, phone, password, confirmPassword } = req.body;

    console.log(name, email, phone, password, confirmPassword);

    const user = await User.findOne({ email });
    if (user) {
        return res.send({ message: 'Email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, phone, password: hashedPassword });
    await newUser.save();
    return res.send({ message: 'User saved successfully, click on ', registration: true });
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return res.send({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.send({ message: 'Invalid Username or Password' });

        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '5m' });
        console.log('token: ', token);

        res.send({ message: 'Logged in successfully', login: true, token: token });
    }
    catch (error) {
        console.log('erro: ', error);
    }
}

const forgotPassword = (async (req, res) => {
    try {
        const { email } = req.body;
        console.log(email)
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
        user.otp = otp;
        user.otpExpires = Date.now() + 5 * 60 * 1000; // 5 min expiry
        // await User.save();

        await sendEmail(email, "Password Reset OTP", `Your OTP is: ${otp}`)

        res.json({ message: "OTP sent to email" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Step 2: Verify OTP and Reset Password
// router.post("/reset-password", async (req, res) => {
//   try {
//     const { email, otp, newPassword } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) return res.status(404).json({ message: "User not found" });
//     if (user.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });
//     if (Date.now() > user.otpExpires) return res.status(400).json({ message: "OTP expired" });

//     user.password = newPassword; // In real use, hash with bcrypt
//     user.otp = undefined;
//     user.otpExpires = undefined;
//     await user.save();

//     res.json({ message: "Password reset successful" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


const search = async (req, res) => {
    const data = await bookModel.find();
    res.json(data);
}

module.exports = { register, login, forgotPassword, search };