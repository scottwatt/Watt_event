// test-local-connection.js
require('dotenv').config();
const mongoose = require('mongoose');

const testLocalConnection = async () => {
  console.log('Testing Local MongoDB Connection...');
  console.log('Connection URI:', process.env.MONGODB_URI || 'mongodb://localhost:27017/casinosite');

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/casinosite', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('\n✓ Connection Successful!');
    console.log('Connected to database:', conn.connection.name);
    console.log('Host:', conn.connection.host);
    console.log('Port:', conn.connection.port);

    // Test database operations
    const TestCollection = mongoose.model('Test', new mongoose.Schema({
      name: String,
      timestamp: { type: Date, default: Date.now }
    }));

    // Create a test document
    const testDoc = await TestCollection.create({ name: 'Test Document' });
    console.log('\n✓ Successfully created test document:', testDoc);

    // Read the document back
    const foundDoc = await TestCollection.findById(testDoc._id);
    console.log('\n✓ Successfully read test document:', foundDoc);

    // Clean up
    await TestCollection.deleteOne({ _id: testDoc._id });
    console.log('\n✓ Successfully cleaned up test document');

  } catch (error) {
    console.error('\n✗ Connection Error:', error.message);
    
    if (error.name === 'MongoServerSelectionError') {
      console.log('\nTroubleshooting steps:');
      console.log('1. Make sure MongoDB service is running');
      console.log('2. Check if MongoDB is installed correctly');
      console.log('3. Verify the port 27017 is not blocked');
      console.log('\nRun these commands to check MongoDB status:');
      console.log('Windows: net start MongoDB');
      console.log('macOS: brew services list');
      console.log('Linux: sudo systemctl status mongodb');
    }
  } finally {
    await mongoose.disconnect();
    console.log('\nConnection test completed');
  }
};

testLocalConnection();