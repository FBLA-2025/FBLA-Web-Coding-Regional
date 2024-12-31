const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config({
  path: path.join(__dirname, ".devcontainer", "devcontainer.env"),
});
console.log("Current working directory:", process.cwd());
console.log(
  "Attempting to load env from:",
  `${process.cwd()}/.devcontainer/devcontainer.env`
);
console.log(
  "Env loading result:",
  dotenv.config({
    path: "./.devcontainer/devcontainer.env",
  })
);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Import Schemas
const productSchema = require("./models/Products");
const userSchema = require("./models/Users");
const employeeSchema = require("./models/Employees");

// Mapping of database names to their respective URIs
const uriMap = {
  "3pm-server-MECAZON": process.env.MONGO_URI, // For Users and Employees collections
};

// Store connections and models
const connections = {};
const models = {};

// Function to get or create a connection based on the database name
const getConnection = async (dbName) => {
  console.log("getConnection called with dbName:", dbName);

  if (!uriMap[dbName]) {
    throw new Error(`No URI mapped for database: ${dbName}`);
  }

  if (!connections[dbName]) {
    const DB_URI = uriMap[dbName];
    console.log(`Creating new connection for ${dbName}.`);

    connections[dbName] = await mongoose.createConnection(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`New connection established for database: ${dbName}`);
  } else {
    console.log(`Reusing existing connection for database: ${dbName}`);
  }

  return connections[dbName];
};

// Function to get or create a model based on the database and collection name



// GET route to find a specific user using id
app.get("/retrieve-user/:database/:collection/:userId", async (req, res) => {
  try {
    const { database, collection, userId } = req.params;
    console.log("GET request received for:", { database, collection, userId });

    const Model = await getModel(database, collection);
    console.log("Model retrieved, executing find query");

    let user = await Model.findOne({ _id: userId }).lean();
    if (!user) {
      console.log(`User not found in ${collection}, searching in the other collection`);
      const otherCollection = collection === 'users' ? 'employee' : 'users';
      const OtherModel = await getModel(database, otherCollection);
      user = await OtherModel.findOne({ _id: userId }).lean();
    }

    if (user) {
      console.log(`Successfully retrieved user: ${user} with ID: ${userId}`);
      res.status(200).json(user);
    } else {
      throw new Error(`User with ID ${userId} not found in both collections`);
    }
  } catch (err) {
    console.error("Error in GET route:", err);
    res.status(500).json({ error: err.message });
  }
});



// GET route to find a user using email and password
app.get("/log-in/:database/:collection/:email/:password", async (req, res) => {
  try {
    const { database, collection, email, password } = req.params;
    console.log("GET request received for:", {
      database,
      collection,
      email,
      password,
    });

    const Model = await getModel(database, collection);
    console.log("Model retrieved, executing find query");

    const user = await Model.findOne({
      "contact_info.email": email,
      password: password,
    }).lean();
    if (user) {
      console.log(`Successfully retrieved user: ${user} with email: ${email}`);
      res.status(200).json(user._id);
    } else {
      throw new Error(
        `User with email ${email} not found or password is incorrect`
      );
    }
  } catch (err) {
    console.error("Error in GET route:", err);
    res.status(500).json({ error: err.message });
  }
});

// POST route to sign up a new user
app.post("/sign-up/:database/:collection", async (req, res) => {
  try {
    const { database, collection } = req.params;
    const { username, email, password } = req.body;

    // console.log("POST request received for:", { database, collection, email });

    const Model = await getModel(database, collection);
    console.log("Model retrieved, executing save query");

    // Check if a user with the same email already exists
    const existingUser = await Model.findOne({
      "contact_info.email": email,
    }).lean();
    if (existingUser) {
      throw new Error(`User with email ${email} already exists`);
    }

    const newUser = new Model({
      username: username,
      name: {
        first_name: null,
        last_name: null,
      },
      location: {
        country: null,
        city: null,
        address: null,
        zip_code: null,
      },
      contact_info: {
        email: email,
        phone_number: null,
      },
      password: password,
      orders: [],
      payment_type: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await newUser.save();

    console.log(`Successfully created user: ${newUser} with email: ${email}`);
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error in POST route:", err);
    res.status(500).json({ error: err.message });
  }
});





// Test connections before starting server
async function startServer() {
  try {
    console.log("Starting server with environment variables:", {
      MONGO_URI: process.env.MONGO_URI ? "Present" : "Missing",
      PORT: process.env.PORT || 3000,
    });
    console.log("Raw URIs:", {

      server: process.env.MONGO_URI,
    });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
}
startServer();
