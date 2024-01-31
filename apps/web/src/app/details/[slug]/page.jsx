// import axios from 'axios';

// export async function generateStaticParams() {
//   const res = await axios.get('http://localhost:8000/events/list-events');
//   const data = res.data;

//   if (res.status !== 200) {
//     throw new Error(`HTTP error! Status: ${res.status}`);
//   }

//   return data.map((event) => ({
//     id: event.id.toString(),
//   }));
// }

// async function getEventId(id) {
//   const res = await axios.get(`http://localhost:8000/events/${id}`);
//   const data = res.data;
//   return data;
// }

// export default async function EventDetails({ params }) {
//   const event = await getEventId(params.id);

//   const formatDate = (isoDate) => {
//     const options = {
//       weekday: 'long',
//       month: 'short',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       hour12: true,
//     };

//     const date = new Date(isoDate);
//     return date.toLocaleDateString('en-US', options);
//   };

//   return (
//     <>
//       <div>{event.id}</div>
//     </>
//   );
// }
