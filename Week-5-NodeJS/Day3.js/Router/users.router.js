
//   Create a separate route file using express.Router()  
//   --------------------------------------------------      


const express = require('express');
const router = express.Router();

// Define routes for users 
router.get('/', (req, res) => {
  res.send('Get all users');
});

router.get('/:id', (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

router.post('/',(req,res)=>{
    const { name, email } = req.body;
    const user = { id: users.length  + 1,name,email};
    users.push(user);
    return res.status(201).json(user);
})

router.patch('/:id', (req,res)=>{
    const { id } = req.params;
    const user = users.find((user) => user.id == id);
    if (!user) {
        return res.status(404).send();
    }

    const { name, email } = req.body;
    if(name) {
        user.name = name ;
    }
       if(email) {
        user.email = email ;
    }
    const index = users.findIndex((user) => user.id == id);
    users[index] = user;
    return res.json(user);
})



module.exports = router; // Export the router
