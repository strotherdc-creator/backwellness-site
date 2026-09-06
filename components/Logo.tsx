import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const isLight = variant === "light";
  const color = isLight ? "#ffffff" : "#2c404e";
  const accent = isLight ? "#f7b733" : "#1175bc";

  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      <span className="logo-mark" aria-hidden="true">
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={44}
          height={37}
          className="logo-mark-img"
          priority={!isLight}
        />
      </span>
      <span className="logo-text" style={{ color }}>
        <span className="logo-name">Staudenmaier</span>
        <span className="logo-sub" style={{ color: accent }}>
          Chiropractic Wellness
        </span>
      </span>
    </Link>
  );
}
