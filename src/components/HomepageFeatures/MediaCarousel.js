import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import styles from "./styles.module.css";

function CustomNextArrow(props) {
  const { onClick, style } = props;
  return (
    <div className={styles.arrowContainer}>
      <div
        className={styles.arrowStyle}
        onClick={onClick}
        style={{ ...style }}
      >
        &gt;
      </div>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick, style } = props;
  return (
    <div className={styles.arrowContainer}>
      <div
        className={styles.arrowStyle}
        onClick={onClick}
        style={{ ...style }}
      >
        &lt;
      </div>
    </div>
  );
}


const FeatureList = [
  {
    title: "最全能的单词学习工具",
    ImgSrc: require("@site/static/img/image.png").default,
    description: (
      <>
        GPT-Tutor可以实现以下单词学习功能，包括单词自定义解释、多语言单词记忆且支持在PC端和移动端使用、根据场景学习单词、同类词比较等等功能。一个浏览器扩展+Anki就相当于彩云小译+欧陆词典+多邻国+百词斩+Moji辞书···除此之外还有很多其它功能。  
      </>
    ),
  },
  {
    title: "单词解释并记忆",
    Image: require("@site/static/img/gpt_1.svg").default,
    description: (
      <>
        鼠标选取不认识的单词进行解释，然后一键将单词添加到anki，在电脑上或者同步到手机上记忆。
      </>
    ),
  },
  {
    title: "自定义单词解释",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        轻松实现对单词的自定义解释。比如你可以要求解释单词的多个含义，近义词/反义词解释，语法搭配、词汇搭配以及相关的成语、谚语、俚语等等,甚至可以让GPT-Tutor在解释单词之前给你讲一个苏联笑话放松心情。
      </>
    ),
  },
  {
    title: "自定义学习方法",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        你看见的任何所谓高效记单词方法，我们都可以通过创建一个prompt直接植入进GPT-Tutor中。视频中演示了GPT-Tutor植入的三种高效扩充单词词汇量的方法。
      </>
    ),
  },
  {
    title: "学习口语和书面表达、修改作文",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        GPT-Tutor不只是能够帮助你学习单词，还能够帮助你学习语法、表达和修改作文。
      </>
    ),
  },
  {
    title: "多语言",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        GPT-Tutor对于英语的学习最有帮助，但同样能够运用于学习其它语言，设置导入不同的语言指令组，你可以学习日语、法语、德语，设置拉丁语。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="features">
        <div >
          <Svg className={styles.featureSvg} role="img" />
                  {Image && <img src={Image} alt={title} />}
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
        <div >
          <img src={ImgSrc} className={styles.featureImg} alt={title} />
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
    nextArrow: <CustomNextArrow style={{ right: "10px", bottom: "-25px" }} />,
    prevArrow: <CustomPrevArrow style={{ left: "10px", bottom: "-25px" }} />,
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
