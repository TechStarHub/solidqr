import Logo from "../Brand/Logo";
import { A } from "@solidjs/router";

export default function Footer() {
  return (
    <div class="w-full p-4 flex items-center">
      <A href="/" class="">
        <Logo />
      </A>
    </div>
  );
}
