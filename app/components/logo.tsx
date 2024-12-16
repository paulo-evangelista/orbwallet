import Image from "next/image";

interface LogoProps {
  variant?: "small" | "large" | "icon";
  className?: string;
}

export function Logo({ variant = "small", className = "" }: LogoProps) {
  const logoSrc = (() => {
    switch (variant) {
      case "small":
        return "/logo-small.svg?height=166&width=991";
      case "large":
        return "/logo-large.svg?height=396&width=993";
      case "icon":
        return "/logo.svg?height=24&width=24";
      default:
        return "/logo.svg?height=166&width=991";
    }
  })();

  const width = variant === "small" ? 991 : 993;
  const height = variant === "small" ? 166 : 396;

  return (
    <div className={className}>
      <Image
        src={logoSrc}
        alt="Orb Logo"
        width={width}
        height={height}
        priority
        className="w-full h-auto"
      />
    </div>
  );
}
