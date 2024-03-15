import BuyTime from '@/components/buyTime/buyTime';

// export async function generateMetadata() {
//   const data = await getData();
//   return data?.head;
// }

// async function getData() {
//   return HomeGet().catch((err) => {

//     return err;
//   });
// }

async function BuyTimePage() {
  return <BuyTime device="desktop" />;
}
export default BuyTimePage;
