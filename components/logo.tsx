import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex-1 flex items-center gap-1 text-2xl">
      <span className="inline-block font-extrabold text-primary">X</span>
      <span className="font-semibold text-foreground">design.ai</span>
    </Link>
  );
};

export default Logo;
