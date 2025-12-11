import content from "@/content/aboutContent.json";
import Image from "next/image";
import avatar from "@/assets/avatar1.webp";
import avatar2 from "@/assets/avatar2.webp";
import avatar3 from "@/assets/avatar3.webp";
import avatar4 from "@/assets/avatar4.webp";
import avatar5 from "@/assets/avatar5.webp";
import avatar6 from "@/assets/avatar6.webp";

const avatars = [avatar, avatar2, avatar3, avatar4, avatar5, avatar6];

export const AboutMainContent = () => {
  return (
    <div className=" flex flex-col items-start justify-evenly md:p-5 gap-3 order-2 md:order-1">
      <div>
        <small className="text-secondary font-bold">
          {content.about.headline}
        </small>
        <h4 className="text-black font-bold">{content.about.title}</h4>
      </div>
      <div className="bg-surface p-3 rounded-sm w-full flex flex-col gap-2">
        <div className="flex justify-between">
          {content.about.stats.map((s, i) => (
            <div className="flex flex-col" key={i}>
              <small className="text-secondary font-bold">{s.value}</small>
              <small className="font-semibold">{s.label}</small>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-secondary p-2 justify-between w-full rounded-sm">
          <div className="avatars-container flex -space-x-3">
            {avatars.map((a, i) => (
              <Image
                key={i}
                src={a}
                alt={`Avatar ${i + 1}`}
                className="w-8 h-8 md:h-10 md:w-10 rounded-full border-2 border-white"
                loading="lazy"
              />
            ))}
          </div>
          <small className="font-semibold">{content.about.avatarsText}</small>
        </div>
      </div>

      <div>
        <p className="text-black font-semibold p-2">{content.about.text}</p>
      </div>
    </div>
  );
};
