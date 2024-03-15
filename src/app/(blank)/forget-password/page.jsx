// import { HomeGet } from '@/api/home';
// import Home from '@/components/home/index';
// import { useGenerateSchema } from '@/hook/useGenerateSchema';
import ForgetPassword from '@/components/forgetPassword/forgetPassword';

// export async function generateMetadata() {
//   const data = await getData();
//   return data?.head;
// }

// async function getData() {
//   return HomeGet().catch((err) => {

//     return err;
//   });
// }

async function ForgetPasswordPage() {
  // const data = await getData();
  // const schema = await useGenerateSchema(data?.head?.schema);
  return <ForgetPassword device="desktop" />;
}
// HomeIndex.ResMode = 'desktop';
export default ForgetPasswordPage;
