type QRLogoProps = {
  name: string;
  logo: string;
  onClick?: () => void;
};

export default function QRLogo({ name, logo, onClick }: QRLogoProps) {
  return (
    <div class="flex flex-col items-center gap-2 p-1 border rounded w-[80px] cursor-pointer">
      <img
        onClick={onClick}
        src={logo}
        alt={name}
        width={70}
        height={70}
        class="w-full h-full min-w-[70px]"
      />
      <span class="text-sm">{name}</span>
    </div>
  );
}
