const { MongoClient,ObjectId } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/";
const dbName = 'lgxz';
//连接
let dbConnection;
async function connectToDatabase() {
    //避免重复连接
    if (dbConnection) {
        return dbConnection;
    }
    //连接
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log('连接mongo服务器成功!');
        dbConnection = client.db(dbName);
        return dbConnection;
    } catch (error) {
        console.error('MongoDB服务器连接失败:', error);
        process.exit(1);// 退出进程
    }
}

//模块区
const find = async function (collection, documentId) {
    if (!ObjectId.isValid(documentId)) {
      throw new Error('Invalid ObjectId');
    }
  
    try {
      const db = await connectToDatabase();
      const result = await db.collection(collection).findOne({ _id: new ObjectId(documentId) });
      if (!result) {
        return null;
      }else {
        return result;
      }
    } catch (error) {
      console.error('find模块报错', error);
      throw error;
    }
  };
  
//导出
module.exports ={find,connectToDatabase}

