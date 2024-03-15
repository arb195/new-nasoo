'use client';

import { useEffect, useMemo } from 'react';
// import HeaderBanner from '@/components/headerBanner/headerBanner';
// import ProductsTrend from '@/components/productsTrend/productsTrend';
// import ProductTab from '@/components/productTab/productTab';
// import SliderArticle from '@/components/sliderArticle/sliderArticle';
import AppContext from '@/context/appContext';
import ContentBox from '@/components/common/contentBox/contentBox';
import SectionSide from '@/components/common/sectionSide/sectionSide';
// import InfoCards from '@/components/infoCards/infoCards';
// import Support from '@/components/support/support';
import { NsContainer } from '@/components/common/grid/grid';
import { useContext } from 'react';
// import Ads from '@/components/ads/ads';
// import BlogRow from '@/components/blogRow/blogRow';
// import MetaTags from '@/components/common/metas/metas';
import { useCheckBreakpoint } from '@/hook/useMediaQuery';
import Section from '@/components/common/section/section';
// import CompanyItem from '@/components/companyList/companyItem';
// import ProductCatsItem from '@/components/productCats/productCatsItem';
import Icon from '@/components/common/icon/icon';
import Slider from '@/components/common/slider/slider';
import Link from 'next/link';
import s from './index.module.scss';

function Home({ data, loading, device = null }) {
  const appContext = useContext(AppContext);
  const nonce = appContext.nonce;
  const [checkRes] = useCheckBreakpoint(device);

  const config = {
    spaceBetween: 15,
    slidesPerView: 7,
    // loop: true,
    // loopedSlides: 4,
    autoplay: {
      delay: 2500,
    },
    breakpoints: {
      0: {
        spaceBetween: 5,
        slidesPerView: 2,
      },
      400: {
        spaceBetween: 5,
        slidesPerView: 2.5,
      },
      480: {
        spaceBetween: 5,
        slidesPerView: 2.7,
      },
      576: {
        spaceBetween: 5,
        slidesPerView: 2.9,
      },
      768: {
        spaceBetween: 5,
        slidesPerView: 3,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 5,
      },
      1200: {
        spaceBetween: 15,
        slidesPerView: 7,
      },
    },
  };

  const dataCompany = (data) => {
    return (
      <div className="slider">
        <div
          className={`section-side-button-next-productCompanyItem swiper-nav `}
        >
          <Icon src={'arrow-right'} width={21} height={21} />
        </div>
        <div className="custome-pagination"></div>
        <div
          className={`section-side-button-prev-productCompanyItem swiper-nav `}
        >
          <Icon src={'arrow-left'} width={21} height={21} />
        </div>
        {/* <Slider
          data={data?.map((item, index) => {
            return (
              <CompanyItem
                key={index}
                url={item?.url}
                img={item?.logo}
                title={item?.name}
                info={item?.short_desc}
              />
            );
          })}
          isCustomNav
          CustomNavNext={`.section-side-button-next-productCompanyItem`}
          CustomNavPrev={`.section-side-button-prev-productCompanyItem`}
          config={config}
        /> */}
      </div>
    );
  };

  const dataProductCats = (data) => {
    return (
      <div className={s.slider}>
        <div className={`section-side-button-next-productCatsItem swiper-nav `}>
          <Icon src={'arrow-right'} width={15} height={15} />
        </div>
        <div className="custome-pagination"></div>
        <div className={`section-side-button-prev-productCatsItem swiper-nav `}>
          <Icon src={'arrow-left'} width={15} height={15} />
        </div>
        {/* <Slider
          data={data?.map((item, index) => {
            return (
              <ProductCatsItem
                key={index}
                url={item.product_cat_link}
                img={item.product_cat_icon}
                title={item.product_cat_title}
              />
            );
          })}
          isCustomNav
          CustomNavNext={`.section-side-button-next-productCatsItem`}
          CustomNavPrev={`.section-side-button-prev-productCatsItem`}
          config={config}
        /> */}
      </div>
    );
  };

  const memoizedContentBox = useMemo(() => {
    return (
      <ContentBox
        hasSeeMore
        link={data?.index_content?.links}
        className={s.aboutSec}
      >
        {data?.index_content?.content}
      </ContentBox>
    );
  }, []);

  const memoizedCatProdSlider = useMemo(() => {
    return (
      <>
        <Section
          black_title={data.title_product_cat_section}
          desc={data.sub_title_product_cat_section}
          icon={{ src: 'menu-color', width: '22', height: '20' }}
        />
        {dataProductCats(data?.product_cats)}
      </>
    );
  }, []);

  return (
    <>
      <NsContainer disableGutters={true}>
        {/* {data?.head && <MetaTags data={data?.head} />} */}
        {/* <HeaderBanner
          className={s.index_headerBanner}
          data={{
            slider: data?.slider,
            autoplay: data?.slider_autoplay,
            top_banner: data?.top_banner,
            specialSell: data?.special_sales,
          }}
          loading={loading}
          device={device}
        /> */}
        {memoizedCatProdSlider}
        {/* <ProductTab
          chartNonce={data?.nonce?.chart}
          data={data?.products_chosen}
          loading={loading}
          device={device}
          title={data?.title_products_chosen_section}
          desc={data?.sub_title_products_chosen_section}
        /> */}
        <SectionSide
          title={data?.title_index_companies_section}
          link="/company/"
          icon={{ src: 'settings', width: '36', height: '36' }}
          data={dataCompany(data?.index_companies)}
          device={device}
          comp={'companyItem'}
          path={'companyList'}
        />
        {/* <Ads data={data?.blog_blow_ads} /> */}
        {/* <ProductsTrend data={data} /> */}
        {/* <Support
          dataNonce={nonce}
          dataContent={data?.experts_content}
          dataSupports={data?.experts_tab}
          title={data?.title_expert_tabs_section}
          desc={data?.sub_title_expert_tabs_section}
          loading={loading}
          device={device}
        /> */}

        {/* <InfoCards data={data?.infocards} device={device} /> */}

        {data?.index_content?.content && (
          <>
            {data?.index_content?.title && (
              <Section
                black_title={data?.index_content?.title}
                icon={{ src: 'info-o', width: '21', height: '21' }}
                tagTitle={data?.index_content?.title_tag ?? 'div'}
              />
            )}
            {memoizedContentBox}
          </>
        )}
      </NsContainer>
    </>
  );
}

export default Home;
