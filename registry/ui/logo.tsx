import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image className="hidden dark:block" src="/logo-dark.png" alt="logo" width={50} height={45} />
      <Image  className="dark:hidden" src="/logo-light.png" alt="logo" width={50} height={45} />
    </div>
  );
};

export default Logo;
