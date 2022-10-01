import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";



const index = (props) => {

  return (
  <>
  <Head>
    <title>Fusion Meetups</title>
    <meta name="description" content="Browse a huge lists of active meetups"/>
  </Head>
  <MeetupList meetups={props.meetups} />;
  </>)
};

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return{
//         props:{
//             meetups: DUMMY_MEETUP,
//         }
//     }
// }

export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://titanOcean:titanb24@nextcluster.bka5mnj.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollections = db.collection('meetups');

    const meetups = await meetupsCollections.find().toArray();

    client.close();
    return{
        props:{
            meetups:meetups.map(meetup=>({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 10, // revalidate page after each 10s
    }
}

export default index;
