import avatar from "@/assets/avatar1.webp";
import avatar2 from "@/assets/avatar2.webp";
import avatar3 from "@/assets/avatar3.webp";
import avatar4 from "@/assets/avatar4.webp";
import avatar5 from "@/assets/avatar5.webp";
import avatar6 from "@/assets/avatar6.webp";

import content from "@/content/aboutContent.json";
import "@/app/css/beforebg.css";
import Image from "next/image";

const avatars = [avatar, avatar2, avatar3, avatar4, avatar5, avatar6];

export const AboutMainContent = () => {
  return (
    <div className=" flex flex-col items-start justify-between gap-3 order-2 md:order-1">
      <div className="w-full bg-surface rounded-sm p-5 flex flex-col gap-5">
        <h4 className="font-black text-secondary">{content.about.title}</h4>
        <div className="flex p-3">
          {avatars.map((a, i) => (
            <Image
              key={i}
              src={a}
              alt={`Avatar${i + 1}`}
              sizes="40px"
              className="h-8 w-8 rounded-full -ml-3 border-2 border-surface"
            />
          ))}
        </div>
        <p>{content.about.avatarsText}</p>
      </div>

      <div className="bg-surface w-full p-5 rounded-sm gap-5 flex flex-col flex-1 justify-between">
        <small className="text-secondary font-black">
          {content.about.headline}
        </small>
        <p>{content.about.text}</p>
        <div className="flex justify-between flex-col md:flex-row">
          {content.about.stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <small className="font-semibold text-secondary">{s.value}</small>
              <small className="font-semibold">{s.label}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
