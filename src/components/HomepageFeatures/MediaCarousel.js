import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "最全能的单词学习工具",
    ImgSrc: require("@site/static/img/image.png").default,
    description: (
      <>
        GPT-Tutor+Anki就相当于彩云小译+欧陆词典+多邻国+百词斩+Moji辞书···除此之外还有很多其它功能。
      </>
    ),
  },
  {
    title: "解释两个类似表达之间的细微差别",
    ImgSrc: require("@site/static/img/gpt_tutor_2.png").default,
    description: (
      <>
        轻松实现对单词的自定义解释。比如你可以要求解释单词的多个含义，近义词/反义词解释，语法搭配、词汇搭配以及相关的成语、谚语、俚语等等,甚至可以让GPT-Tutor在解释单词之前给你讲一个苏联笑话放松心情。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="features">
      <div>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="featureText">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ImageFeature({ ImgSrc, title, description }) {
  return (
    <div className="features">
      <div>
        <img src={ImgSrc} className={styles.featureImg} role="img" />
      </div>
      <div className="featureText">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function GifFeature({ GifSrc, title, description }) {
  return (
    <div className="features">
      <div>
        <img src={GifSrc} className={styles.featureGif} alt={title} />
      </div>
      <div className="featureText">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function MediaCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Slider {...settings}>
        {FeatureList.map((feature, index) => (
          <div key={index}>
            {feature.Svg && <Feature {...feature} />}
            {feature.ImgSrc && <ImageFeature {...feature} />}
            {feature.GifSrc && <GifFeature {...feature} />}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MediaCarousel;
