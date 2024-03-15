import Login from '@/components/login/login';

// export async function generateMetadata() {
//   const data = await getData();
//   return data?.head;
// }

// async function getData() {
//   return HomeGet().catch((err) => {

//     return err;
//   });
// }

async function HomeIndex() {
  return <Login device="desktop" />;
}
export default HomeIndex;
