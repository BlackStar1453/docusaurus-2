import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "最全能的语言学习工具",
    ImgSrc: require("@site/static/img/image.png").default,
    description: (
      <>
    1. 能够像彩云小译一样在网页或PDF文档上划取单词进行翻译。<br />
    2. 能够像欧陆词典一样轻松添加近义词/反义词、词组、习惯用语。<br />
    3. 能够像百词斩一样在电脑和手机上按照记忆曲线背诵单词。<br />
    4. 能够像多邻国一样学习多语言，而且比多邻国要强大得多。<br />
    5. 能够像母语使用者一样为你讲解这门语言中不同表达之间的细微差别<br />
    6.更多功能等待挖掘中···
  </>
    ),    
  },
  {
    title: "解释单词的多种含义",
    GifSrc: require("@site/static/gif/gpt-tutor-explainword.gif").default,
    description: (
      <>
      解释单词在不同语境和不同领域的多种含义，不用再担心在阅读时出现词认识，但却不知道具体含义的情况。
      </>
    ),
  },
  {
    title: "解释两个类似表达之间的细微差别",
    ImgSrc: require("@site/static/img/gpt_tutor_2.png").default,
    description: (
      <>
有时候你会认为两个词的含义是相同或者是类似的，但实际上在母语使用者看来两者有很大的区别，GPT-Tutor能够帮助你解释它们之间的区别。
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
        <p className={styles.descriptionStyle}>{description}</p>
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
        <p className={styles.descriptionStyle}>{description}</p>
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
