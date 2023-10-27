import React, { useState } from "react";
import "./SidebarWithMedia.css";
function SidebarWithMedia() {
  const links = [
    {
      title: "Link 1",
      description: "描述内容1", // 新增的描述字段
      mediaURL: "https://www.youtube.com/embed/SJOnhWiJArM&t=90s",
    },
    {
      title: "Link 2",
      description: "描述内容2", // 新增的描述字段
      mediaURL: "https://www.youtube.com/embed/CpfLGNhqTYw",
    },
  ];

  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);
  const [currentMedia, setCurrentMedia] = useState(links[0].mediaURL);

  return (
    <div className="sidebarWithMediaContainer">
      <div className="sidebar">
        {links.map((link, index) => (
          <div
            className="navItem"
            key={index}
            onClick={() => setCurrentMedia(link.mediaURL)}
          >
            <div className="navTitle">{link.title}</div>
            <div className="navDescription">{link.description}</div>
          </div>
        ))}
      </div>

      <div className="mediaContainer">
        <iframe
          width="100%"
          height="100%"
          src={currentMedia}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default SidebarWithMedia;
