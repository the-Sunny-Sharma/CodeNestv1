import { MongoClient, ObjectID } from "mongodb";
import bcrypt from "bcryptjs";

// MongoDB connection URI
const uri = "mongodb://0.0.0.0:27017";
// Database Name
const dbName = "codeNestv1";

// Function to connect to MongoDB
async function connectToMongo() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB");

    // Access the database
    const db = client.db(dbName);

    // Define the user collection
    const usersCollection = db.collection("users");

    // Define the user model methods

    // Function to find a user by email
    async function findUserByEmail(email) {
      return await usersCollection.findOne({ email });
    }

    // Function to create a new user
    async function createUser(
      fName,
      lName,
      dob,
      phone,
      email,
      password,
      isAdmin = false
    ) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = {
        fName,
        lName,
        dob,
        phone,
        email,
        password: hashedPassword,
        isAdmin,
      };
      const result = await usersCollection.insertOne(user);
      return result.ops[0]; // Return the inserted user
    }

    // Function to compare password
    async function matchPassword(enteredPassword, hashedPassword) {
      return await bcrypt.compare(enteredPassword, hashedPassword);
    }

    // Return the user model methods
    return {
      findUserByEmail,
      createUser,
      matchPassword,
    };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Export the connectToMongo function
export default connectToMongo;
