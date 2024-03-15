import PayInfo from '@/components/payInfo/payInfo';

// export async function generateMetadata() {
//   const data = await getData();
//   return data?.head;
// }

// async function getData() {
//   return HomeGet().catch((err) => {

//     return err;
//   });
// }

async function PaySuccessPage() {
  return <PayInfo device="desktop" status="error" />;
}
export default PaySuccessPage;
