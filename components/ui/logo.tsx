import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image className="hidden dark:block" src="/logo-dark.png" alt="logo" width={50} height={50} />
      <Image  className="dark:hidden" src="/logo-light.png" alt="logo" width={50} height={50} />
    </div>
  );
};

export default Logo;
