const path = require('path');
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;

dotenv.config();

const config = {
  mongodb: {
    url: process.env.MONGO_URI,
    databaseName: 'WorkConnectDB',

    options: {
      // ลบ useNewUrlParser และ useUnifiedTopology ที่ไม่จำเป็นออก
    }
  },

  migrationsDir: path.resolve(__dirname, 'migrations'),

  changelogCollectionName: 'changelog',
};

// ตรวจสอบการเชื่อมต่อฐานข้อมูล
(async () => {
  try {
    const client = await MongoClient.connect(config.mongodb.url, config.mongodb.options);
    console.log('Database connection successful');
    await client.close();
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();

module.exports = config;
