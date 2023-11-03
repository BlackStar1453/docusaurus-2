import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
const FeatureList = [
  {
    title: "解释单词并在电脑和手机上记忆",
    GifSrc: require("@site/static/gif/gpt-tutor-explainword.gif").default,
    description: (
      <>
        解释单词在不同语境和不同领域的多种含义，然后点击添加到anki就能在电脑和手机上记忆。
      </>
    ),
  },
  {
    title: "单词使用",
    ImgSrc: require("@site/static/img/gpt_tutor_4.png").default,
    description: (
      <>
        解释单词的用法。根据单词的类型（名词、形容词、动词）分别解释单词的用法。
      </>
    ),
  },
  {
    title: "单词扩充",
    ImgSrc: require("@site/static/img/gpt_tutor_3.png").default,
    description: (
      <>
        给出与该单词的同类或类似词，并且学习它们之间的区别，这样你就不会混淆，并且能够在正确的地方使用该单词。
      </>
    ),
  },
  {
    title: "根据场景学习单词",
    ImgSrc: require("@site/static/img/gpt_tutor_5.png").default,
    description: (
      <>
        输入一个场景或者学科，然后会给出这个场景或学科里的相关单词，这个功能可以帮助你学习同一个类别的单词，快速扩充词汇量。
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

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const prevArrowImg = require("@site/static/img/prev_arrow.png").default;
  return (
    <img
      src={prevArrowImg}
      className={className}
      role="img"
      style={{
        display: "block",
        backgroundColor: "transparent", // 设置为透明背景
        left: "15%",
        zIndex: 2,
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  const nextArrowImg = require("@site/static/img/next_arrow.png").default;
  return (
    <img
      src={nextArrowImg}
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        right: "15%",
        zIndex: 2,
        width: "40px",
        height: "40px",
        backgroundSize: "cover",
      }}
      onClick={onClick}
    />
  );
}

function MediaCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
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
