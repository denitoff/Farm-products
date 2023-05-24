import "swiper/swiper.scss";
import SwiperCore, {
  Navigation,
  Mousewheel,
  Scrollbar,
  Thumbs,
  Pagination
} from "swiper";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "./styles.css";

import React from "react";
import { GalleryWrapper, StyledSwiperSlide } from "./style";
import ProductCards from "/src/components/ui/product-card/product-card";

function ProductGallery({ products }) {
  SwiperCore.use([Navigation, Thumbs]);

  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + index + "</span>";
  //   }
  // };

  return (
    <GalleryWrapper
      freeMode
      watchSlidesProgress
      navigation={true}
      slidesPerView={2.5}
      spaceBetween={20}
      direction={"vertical"}
      mousewheel={true}
      scrollbar={{
        hide: false
      }}
      modules={[Mousewheel, Scrollbar, Pagination]}
      // pagination={pagination}
    >
      {products?.length
        ? products.map((product) => (
            <StyledSwiperSlide key={product.id}>
              <ProductCards product={product} />
            </StyledSwiperSlide>
          ))
        : null}
    </GalleryWrapper>
  );
}

export default ProductGallery;
