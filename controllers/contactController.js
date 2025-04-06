const asyncHandler = require("express-async-handler")

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get All Contacts'});
});


const createContact = asyncHandler (async (req, res) => {
    console.log("The request body is:", req.body);
    const { name, email, phone } = req.body;
    if ( !name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are Required!");
    }
    res.status(201).json({message: 'Create Contacts'});
});


const getContact = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
});

const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
});

const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
});


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };