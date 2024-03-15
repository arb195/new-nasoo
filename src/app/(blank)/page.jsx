// import { HomeGet } from '@/api/home';
// import Home from '@/components/home/index';
// import { useGenerateSchema } from '@/hook/useGenerateSchema';
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
  // const data = await getData();
  // const schema = await useGenerateSchema(data?.head?.schema);
  return (
    <>
      {/* {schema &&
        schema?.map((item, index) => {
          return (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: item }}
            ></script>
          );
        })}
      <Home data={data} /> */}
      <Login device="desktop" />;
    </>
  );
}
// HomeIndex.ResMode = 'desktop';
export default HomeIndex;
