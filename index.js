import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './route/user.js'; // Make sure this path is correct

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); // Alternatively, you can use app.use(express.json());

// All routes in userRoutes will be prefixed with /users
app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
