import Image from "next/image";

const Header = () => {
  return (
    <header>
      <h1>Hello this is header component</h1>
      <Image
        className="object-contain"
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
