import {
  createSignal,
  Show,
  For,
  onMount,
  onCleanup,
  createEffect,
} from "solid-js";
import domToImage from "dom-to-image";
import QrCode from "qrcode";
import qrLogos from "./../../data/qr-logos.json";
import QRLogo from "./QRLogo";
import { RiEditorAiGenerate } from "solid-icons/ri";
import { FiDownload } from "solid-icons/fi";

const qrOption = {
  quality: 1,
  errorCorrectionLevel: "H",
  margin: 1,
};

export default function QRGenerator() {
  const [qrData, setQRData] = createSignal("");
  const [qrDataType, setQRDataType] = createSignal("text");
  const [qrOptions, setQROptions] = createSignal(qrOption);
  const [addMedia, setAddMedia] = createSignal(false);
  const [qrLogo, setQRLogo] = createSignal("/qr-logos/default.png");

  let canvas: any;
  let qrContainer: any;

  const handleDataInput = (e: any) => {
    setQRData(e.target.value);
    console.log(qrData());
  };

  const handleDataTypeInput = (e: any) => {
    setQRDataType(e.target.value);
    console.log(qrDataType(), canvas);
  };

  const createQR = () => {
    try {
      QrCode.toCanvas(canvas, qrData(), qrOptions(), (error: any) => {
        if (error) console.error(error);
        console.log("success!");
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleDownload = () => {
    domToImage.toPng(qrContainer, { quality: 1 }).then((dataUrl) => {
      var link = document.createElement("a");
      link.download = "solidqr.png";
      link.href = dataUrl;
      link.click();
    });
  };

  onMount(() => {
    canvas = document.querySelector("canvas");
    localStorage.getItem("qrData") &&
      setQRData(localStorage.getItem("qrData")!);
  });

  onCleanup(() => {
    localStorage.setItem("qrData", qrData());
  });

  createEffect(() => {
    // createQR();
  });

  return (
    <div class="px-4 py-8 rounded w-full flex gap-6 sm:gap-2 flex-col sm:flex-row ">
      <div class="w-full">
        <div class="w-full flex items-center gap-2">
          <input
            type={qrData()}
            class="w-full rounded p-2 border border-[#2c4e82] outline-none bg-slate-100"
            value={qrData()}
            onInput={handleDataInput}
          />
          <select
            onInput={handleDataTypeInput}
            name=""
            class="rounded p-2 border border-[#2c4e82]"
            id=""
          >
            <option value="text" selected={qrDataType() === "text"}>
              Text
            </option>
            <option value="url" selected={qrDataType() === "url"}>
              URL
            </option>
            <option value="email" selected={qrDataType() === "email"}>
              Email
            </option>
            <option value="phone" selected={qrDataType() === "phone"}>
              Phone
            </option>
            <option value="sms" selected={qrDataType() === "sms"}>
              SMS
            </option>
          </select>
        </div>

        <div class="w-full">
          <h5 class="text-xl my-2">QR Options</h5>
          <div class="w-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <label
              for="qr-error-correction-level"
              class="flex items-center gap-2 "
            >
              <span class="">Error Correction Level</span>
              <select
                onInput={(e: any) =>
                  setQROptions({
                    ...qrOptions(),
                    errorCorrectionLevel: e.target.value,
                  })
                }
                name=""
                id="qr-error-correction-level"
                class="rounded p-2 border border-[#2c4e82]"
              >
                <option
                  value="L"
                  selected={qrOptions().errorCorrectionLevel === "L"}
                >
                  L
                </option>
                <option
                  value="M"
                  selected={qrOptions().errorCorrectionLevel === "M"}
                >
                  M
                </option>
                <option
                  value="Q"
                  selected={qrOptions().errorCorrectionLevel === "Q"}
                >
                  Q
                </option>
                <option
                  value="H"
                  selected={qrOptions().errorCorrectionLevel === "H"}
                >
                  H
                </option>
              </select>
            </label>
            <label for="qr-margin" class="flex items-center gap-2">
              <span class="">Margin</span>
              <input
                onInput={(e: any) =>
                  setQROptions({
                    ...qrOptions(),
                    margin: parseInt(e.target.value),
                  })
                }
                value={qrOptions().margin}
                min={0}
                max={10}
                type="number"
                name=""
                id="qr-margin"
                class="rounded p-2 border border-[#2c4e82]"
              />
            </label>
            <label for="qr-quality" class="flex items-center gap-2">
              <span class="">Quality</span>
              <input
                onInput={(e: any) =>
                  setQROptions({
                    ...qrOptions(),
                    quality: parseInt(e.target.value),
                  })
                }
                value={qrOptions().quality}
                max={1}
                min={0}
                type="number"
                name=""
                id="qr-quality"
                class="rounded p-2 border border-[#2c4e82]"
              />
            </label>
          </div>
        </div>

        <div class="w-full mt-4">
          <label for="media-checkbox" class="flex items-center gap-2">
            <input
              type="checkbox"
              checked={addMedia()}
              onInput={() => setAddMedia(!addMedia())}
              name=""
              id="media-checkbox"
              class=""
            />
            <span class="">Add Media</span>
          </label>
        </div>

        <Show when={addMedia()}>
          <div class="w-full">
            <h5 class="text-xl my-2">Square Logos</h5>
            <div class="w-full sm:max-w-[700px] flex gap-2 border p-2 overflow-x-scroll">
              <For each={qrLogos.squared}>
                {(logo) => (
                  <QRLogo
                    name={logo.name}
                    logo={logo.url}
                    onClick={() => setQRLogo(logo.url)}
                  />
                )}
              </For>
            </div>
            {/* <div class="w-full">
              <h5 class="text-xl">Cricled Logos</h5>
            </div> */}
            <div class="w-full flex flex-col items-center gap-2 mt-4">
              <input
                type="file"
                name=""
                id=""
                class="w-full rounded p-2 border border-[#2c4e82] outline-none bg-slate-100"
              />
            </div>
          </div>
        </Show>

        <div class="w-full flex items-center gap-2 mt-4">
          <button
            class="rounded p-2 bg-[#2c4e82] hover:bg-[#244069] hover:shadow-lg transition-all duration-300 text-white flex items-center gap-2"
            onClick={createQR}
          >
            <span class=" ">Generate</span>
            <RiEditorAiGenerate class="w-5 h-5" />
          </button>
          <button
            class="rounded p-2 bg-[#2c4e82] hover:bg-[#244069] hover:shadow-lg transition-all duration-300 text-white flex items-center gap-2"
            onClick={handleDownload}
          >
            <span class="">Download</span>
            <FiDownload class="w-5 h-5" />
          </button>
        </div>
      </div>

      <div class="w-full h-full flex flex-col items-center justify-center">
        <h5 class="text-xl text-center font-bold mb-8">QR Code</h5>
        <div class="w-fit h-fit relative p-1" ref={qrContainer}>
          <canvas ref={canvas} width={200} height={200} class=""></canvas>
          <Show when={addMedia() && qrData() != ""}>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded">
              <img src={qrLogo()} alt="solid logo" class="w-16 h-16 " />
            </div>
          </Show>
        </div>
      </div>
    </div>
  );
}
