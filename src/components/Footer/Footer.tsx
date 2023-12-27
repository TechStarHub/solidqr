import Logo from "../Brand/Logo";
import { A } from "@solidjs/router";

export default function Footer() {
  return (
    <footer class="w-full flex flex-col gap-2 p-4">
      <div class="w-full flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div class="">
          <A href="/" class="">
            <Logo />
          </A>
          <p class="mt-2 text-slate-600 text-md hover:text-slate-800 transition-all duration-200">
            SolidQR is QR generator made with SolidJS.
          </p>
        </div>
        <div class="w-full sm:w-fit">
          <p class="text-slate-600 text-md text-center font-medium ">
            Made with ❤️ by{" "}
            <A
              href="https://github.com/TechStarHub"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#2c4e82]"
            >
              @TechStarHub
            </A>
          </p>
        </div>
      </div>
      <hr />
      <p class="text-center text-sm font-medium text-slate-500 hover:text-slate-700 transition-all duration-200">
        © 2023 BioDrop. All rights reserved.
      </p>
    </footer>
  );
}
