import React from 'react';
import { LightbulbIcon, PuzzleIcon, CheckCircleIcon } from 'lucide-react';

const Intro = () => {
  const sections = [
    {
      icon: <LightbulbIcon className="w-8 h-8 text-blue-500" />,
      title: "了解GPT-Tutor",
      items: [
        { text: "什么是GPT-Tutor", link: "/docs/introduction" },
        { text: "如何使用GPT-Tutor来学习语言", link: "/docs/category/english" },
        { text: "为什么gpt-tutor是免费且开源的", link: "/blogs/why-gpt-tutor-free" },
        { text: "开发者指南", link: "/docs/guide-for-developer" },
      ]
    },
    {
      icon: <PuzzleIcon className="w-8 h-8 text-blue-500" />,
      title: "初次使用AI学习语言？",
      items: [
        { text: "使用AI学习单词的示例", link: "/docs/gpt-English/word-example" },
        { text: "使用AI学习表达的示例", link: "/docs/gpt-English/expression-example" },
        { text: "使用AI学习之前的注意事项", link: "/docs/attention" },
        { text: "了解一些AI的相关知识", link: "/docs/category/related-reading" },
      ]
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-blue-500" />,
      title: "常见问题解答",
      items: [
        { text: "下载相关", link: "/docs/download" },
        { text: "设置相关", link: "/docs/settings" },
        { text: "在使用ChatGPT(Web)时可能遇到的问题和解决方案", link: "/docs/chatgpt" },
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
