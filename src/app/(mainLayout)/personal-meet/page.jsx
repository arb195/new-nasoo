import PersonalMeet from '@/components/personalMeet/personalMeet';
import { AllJalaseFardis } from '@/api/personal-meet';
import { useContext } from 'react';
import AppContext from '@/context/appContext';

// export async function generateMetadata() {
//   const data = await getData();
//   return data?.head;
// }

async function getData() {
  // const appContext = useContext(AppContext);
  // const [user] = appContext.user;
  console.log(AppContext);
  // return AllJalaseFardis().catch((err) => {

  //   return err;
  // });
}

async function PersonalMeetPage() {
  const data = await getData();

  return <PersonalMeet device="desktop" />;
}
export default PersonalMeetPage;
