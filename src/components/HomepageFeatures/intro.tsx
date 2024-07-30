import React from 'react';
import { LightbulbIcon, PuzzleIcon, CheckCircleIcon } from 'lucide-react';

const Intro = () => {
  const sections = [
    {
      icon: <LightbulbIcon className="w-8 h-8 text-blue-500" />,
      title: "Chrome 概念",
      items: [
        { text: "什么是 Chrome 发布版本?", link: "/docs/introduction" },
        { text: "什么是 Chrome flag?", link: "/docs/introduction" },
        { text: "开始试用源试用", link: "#" },
        { text: "Chrome 中的新功能", link: "#" },
      ]
    },
    {
      icon: <PuzzleIcon className="w-8 h-8 text-blue-500" />,
      title: "扩展程序",
      items: [
        { text: "新变化", link: "#" },
        { text: "开始", link: "#" },
        { text: "开发", link: "#" },
        { text: "Chrome Web Store", link: "#" },
      ]
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-blue-500" />,
      title: "始终更新",
      items: [
        { text: "Chrome 中的新功能", link: "#" },
        { text: "版本说明", link: "#" },
        { text: "博客", link: "#" },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">使用 Chrome 构建</h1>
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
