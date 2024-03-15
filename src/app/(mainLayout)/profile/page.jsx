import UserProfile from '@/components/userProfile/userProfile';

// export async function generateMetadata() {
//   const data = await getData();
//   return data?.head;
// }

// async function getData() {
//   return HomeGet().catch((err) => {
//     return err;
//   });
// }

async function ProfilePage() {
  return <UserProfile device="desktop" />;
}
export default ProfilePage;
