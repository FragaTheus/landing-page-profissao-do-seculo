import content from "@/content/footerContent.json";

export const Footer = () => {
  return (
    <div className="flex flex-col opacity-70 items-center w-full mt-5 text-center text-white">
      <small>{content.footer.brand}</small>
      <small>{content.footer.description}</small>
      <small>{content.footer.disclaimer}</small>
      <small>{content.footer.copyright}</small>
    </div>
  );
};
