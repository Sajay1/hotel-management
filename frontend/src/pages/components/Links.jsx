export default function Links() {
  const linkStyle =
    "font-averia font-extrabold text-white px-5 py-5 rounded-md text-xl font-medium duration-300 ease-in hover:underline focus:underline hover:px-1";

  const links = [
    { label: "HOME", href: "/", className: linkStyle },
    { label: "ABOUT", href: "/about", className: linkStyle },
    { label: "ROOMS", href: "/rooms", className: linkStyle },
    { label: "CONTACT", href: "/contact", className: linkStyle },
  ];

  return (
    <>
      {/*Link Section*/}
      {links.map((link, index) => (
        <a key={index} href={link.href} className={link.className}>
          {link.label}
        </a>
      ))}
    </>
  );
}
