import React from 'react';
import { LightbulbIcon, PuzzleIcon, CheckCircleIcon } from 'lucide-react';
import Translate, {translate} from '@docusaurus/Translate';
const Intro = () => {
  const sections = [
    {
      icon: <LightbulbIcon className="w-8 h-8 text-blue-500" />,
      title: <Translate>了解GPT-Tutor</Translate>,
      items: [
        { text: <Translate>什么是GPT-Tutor</Translate>, link: "/docs/introduction" },
        { text: <Translate>如何使用GPT-Tutor来学习语言</Translate>, link: "/docs/category/英语学习" },
        { text: <Translate>为什么gpt-tutor是免费且开源的</Translate>, link: "/blog/why-gpt-tutor-free" },
      ]
    },
    {
      icon: <PuzzleIcon className="w-8 h-8 text-blue-500" />,
      title: <Translate>初次使用AI学习语言？</Translate>,
      items: [
        { text: <Translate>使用AI学习之前的注意事项</Translate>, link: "/docs/about-gpt-tutor/attention" },
        { text: <Translate>使用AI学习单词</Translate>, link: "/docs/category/单词学习" },
        { text: <Translate>使用AI学习表达</Translate>, link: "/docs/category/表达学习" },
        { text: <Translate>使用AI学习作文</Translate>, link: "/docs/category/写作学习" },
      ]
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-blue-500" />,
      title: <Translate>常见问题解答</Translate>,
      items: [
        { text: <Translate>下载相关</Translate>, link: "/docs/download" },
        { text: <Translate>设置相关</Translate>, link: "/docs/settings" },
        { text: <Translate>使用界面中的专业术语</Translate>, link: "/docs/category/解释专业术语" },
        { text: <Translate>其它问题</Translate>, link: "/docs/category/常见问题" },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="bg-blue-100 p-2 rounded-full mb-4">
              {section.icon}
            </div>
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href={item.link} className="text-blue-600 hover:underline">
                  {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default Intro;
