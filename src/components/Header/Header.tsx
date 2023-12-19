import { A } from "@solidjs/router";
import { FiGithub } from "solid-icons/fi";
import Logo from "../Brand/Logo";

export default function Header() {
  return (
    <div class="w-full p-4 flex items-center justify-between">
      <A href="/" class="flex items-center gap-2">
        <Logo />
      </A>
      <A href="/login" class="text-xl font-bold ">
        <span class="">
          <FiGithub class="w-6 h-6" />
        </span>
      </A>
    </div>
  );
}
