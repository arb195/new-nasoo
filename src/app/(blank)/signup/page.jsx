import Signup from '@/components/signup/signup';

// export async function generateMetadata() {
//   const data = await getData();
//   return data?.head;
// }

// async function getData() {
//   return HomeGet().catch((err) => {

//     return err;
//   });
// }

async function SignupPage() {
  return <Signup device="desktop" />;
}
export default SignupPage;
