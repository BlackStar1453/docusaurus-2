import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "单词解释并记忆",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
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
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
