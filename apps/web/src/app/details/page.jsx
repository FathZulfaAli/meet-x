
// import React from 'react';
// import axios from 'axios';

// export async function generateStaticParams() {
//   const res = await axios.get('http://localhost:8000/events/list-events');
//   const data = res.data;
//   console.log(data);
//   if (!200) {
//     throw new Error('fetching gagal');
//   }

//   // return data.map((event) => ({
//   //   id: event.id.toString(),
//   // }));
// }

// // async function getEvent(id) {
// //   const res = await axios.get(http://localhost:8000/events/${id});
// //   const data = res.data;
// //   return data;
// // }

// export default async function EventDetail({ params }) {
//   // const event = await getEvent(params.id);
//   // console.log(event);

//   return (
//     <>
//       <h1>event</h1>
//       {/* {event.map((event) => {
//         <div key={event.id}>
//           <h1>{event.title}</h1>
//         </div>;
//       })} */}
//     </>
//   );
// }
