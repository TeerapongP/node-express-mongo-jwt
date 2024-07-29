// migrations/20240729000000-create-orders.js
module.exports = {
    async up(db, client) {
      try {
        console.log('Running migration up...');
        // ตัวอย่างการเพิ่มคอลเล็กชันใหม่
        await db.createCollection('orders');
        console.log('Migration up completed successfully.');
      } catch (error) {
        console.error('Error during migration up:', error);
        throw error; // เพื่อให้ migration ถือว่าล้มเหลว
      }
    },
  
    async down(db, client) {
      try {
        console.log('Running migration down...');
        // ตัวอย่างการลบคอลเล็กชัน
        await db.collection('orders').drop();
        console.log('Migration down completed successfully.');
      } catch (error) {
        console.error('Error during migration down:', error);
        throw error; // เพื่อให้ migration ถือว่าล้มเหลว
      }
    }
  };
  