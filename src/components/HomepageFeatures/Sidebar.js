// 在 @site/src/components/ 文件夹下创建 SidebarWithMedia.jsx

import React, { useState } from "react";
import "./SidebarWithMedia.css";

const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);

function SidebarWithMedia() {
  const links = [
    {
      title: "Link 1",
      description: "描述内容1",
      mediaURL: "https://www.youtube.com/embed/SJOnhWiJArM", // 注意: 使用“embed”链接而不是“watch”链接
    },
    // ... 更多链接 (如果有的话)
  ];

  const [currentMedia, setCurrentMedia] = useState(links[0].mediaURL);

  return (
    <div className="sidebarWithMediaContainer">
      <div className="sidebar">
        {links.map((link, index) => (
          <div
            className={`navItem ${
              selectedLinkIndex === index ? "selected" : ""
            }`}
            key={index}
            onClick={() => {
              setCurrentMedia(link.mediaURL);
              setSelectedLinkIndex(index);
            }}
          >
            <div className="navTitle">{link.title}</div>
            <div className="navDescription">{link.description}</div>
          </div>
        ))}
      </div>
      <div className="mediaContainer">
        <iframe
          width="800px"
          height="400px"
          src={currentMedia}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default SidebarWithMedia;
