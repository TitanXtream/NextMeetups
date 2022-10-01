import {MongoClient} from 'mongodb'

async function handler(req, res) {

  if(req.method === 'POST'){

    const data = req.body
    
    const client = await MongoClient.connect('mongodb+srv://titanOcean:titanb24@nextcluster.bka5mnj.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollections = db.collection('meetups');

    const result = await meetupsCollections.insertOne(data); 

    client.close();

    res.status(201).json({message: 'Meetup inserted'});
  }
}

export default handler;
