import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const color = variant === "light" ? "#ffffff" : "#2c404e";
  const accent = variant === "light" ? "#f7b733" : "#1175bc";
  const markBg = variant === "light" ? "#0c5284" : "#1175bc";
  const markStroke = variant === "light" ? "#f7b733" : "#ffffff";

  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      <span className="logo-mark" aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect width="36" height="36" rx="8" fill={markBg} />
          <path
            d="M18 8v20M12 14c0 0 2.5-3 6-3s6 3 6 3M12 22c0 0 2.5 3 6 3s6-3 6-3"
            stroke={markStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
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
