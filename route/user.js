
import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

// Define `users` as a constant array
const users = [
  {
    id: uuidv4(), // Adding unique ID to each user
    first_name: "Nythann",
    last_name: "Ake",
    gmail: "Ake123@gmail.com",
  },
  {
    id: uuidv4(),
    first_name: "Lythann",
    last_name: "Ake",
    gmail: "Ake234@gmail.com",
  },
];
//add user'
router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`${user.first_name} has been added to the Database`);
});
router.get('/', (req, res) => {
    res.json(users);
});

// DELETE route to remove a user by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Find the index of the user to be deleted
  const userIndex = users.findIndex((user) => user.id === id);

  // If user not found, send 404 response
  if (userIndex === -1) {
    return res.status(404).send(`User with id ${id} not found`);
  }

  // Remove the user from the array using splice
  users.splice(userIndex, 1);

  // Send success response
  res.send(`User with id ${id} deleted successfully from the database`);
});

export default router;
