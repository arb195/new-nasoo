import PersonalMeet from '@/components/personalMeet/personalMeet';
import { AllJalaseFardis } from '@/api/personal-meet';

// export async function generateMetadata() {
//   const data = await getData();
//   return data?.head;
// }

// async function getData() {
//   // const [user] = appContext.user;
//   // return AllJalaseFardis().catch((err) => {
//   //   return err;
//   // });
// }

async function PersonalMeetPage() {
  // const data = await getData();

  return <PersonalMeet device="desktop" />;
}
export default PersonalMeetPage;
