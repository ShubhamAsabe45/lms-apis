var express = require('express');
var router = express.Router();

const userModel = require('./../models/user');

// Get user details
router.get('/', async (req, res, next) => {
    try {
        const data = await userModel.find();
        console.log('User data recived');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add user details
router.post('/', async (req, res, next) => {
    try {
        const data = req.body; //Assuming request body contain the user data

        // Create a new user using model
        const newUser = new userModel(data);

        const response = await newUser.save();
        console.log('Data Saved');
        res.status(200).json(response); //send the response with status code

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update user details
router.put('/', async (req, res, next) => {
    try {
        const userId =  req.headers['id']; // Extract the id from the request headers
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required in headers' });
        }
        const updateUser = req.body;

        const response = await userModel.findByIdAndUpdate(
            userId, updateUser, {
            new: true, //Purpose: This option specifies that the callback function should return the modified document rather than the original.
            runValidators: true //Purpose: This option ensures that any validation rules defined in the Mongoose schema are enforced during the update operation.
        }
        );
        if (!response) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log('Data Updated');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete user details
router.delete('/', async (req, res, next) =>{
    try{
        const userId =  req.headers['id']; // Extract the id from the request headers
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required in headers' });
        }

        const response = await userModel.findByIdAndDelete(userId);

        if(!response){
            return res.status(404).json({message:'User not found'});
        }

        console.log(response);
        res.status(200).json({message:'Person Deleted'});
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;