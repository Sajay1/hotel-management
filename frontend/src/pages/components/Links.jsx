export default function Links() {
  const linkStyle =
    "font-averia font-extrabold text-white px-5 py-5 rounded-md text-xl font-medium duration-300 ease-in hover:scale-125 hover:underline focus:underline";

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "ROOMS", href: "/rooms" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {links.map(({ label, href }) => (
        <a key={href} href={href} className={linkStyle}>
          {label}
        </a>
      ))}
    </>
  );
}