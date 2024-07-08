interface NavButtonProps {
    href: string;
    variant: "primary" | "secondary";
    children: React.ReactNode;
  }
  
  export const NavButton: React.FC<NavButtonProps> = ({ href, variant, children }) => {
    const baseStyle = "px-4 py-2 rounded-lg hover:bg-cyan-950";
    const variantStyle =
      variant === "primary"
        ? "bg-gray-800 text-white"
        : "bg-gray-100 text-gray-400";
  
    return (
      <a href={href} className={`${baseStyle} ${variantStyle}`}>
        {children}
      </a>
    );
  };