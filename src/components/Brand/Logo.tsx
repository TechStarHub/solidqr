import { BsQrCodeScan } from "solid-icons/bs";

export default function Logo() {
  return (
    <div class="flex items-center gap-2 group">
      <span class="">
        <BsQrCodeScan class="w-8 h-8 group-hover:scale-110 transition-all duration-300" />
      </span>
      <h1 class="flex items-center gap-0">
        <span class="text-2xl font-bold text-[#2c4e82] group-hover:text-[#5b8eb3] transition-all duration-300 ">
          Solid
        </span>
        <img
          src="/logo.svg"
          class="w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-300"
          alt="solid logo"
        />
        <span class="text-2xl">QR</span>
      </h1>
    </div>
  );
}
