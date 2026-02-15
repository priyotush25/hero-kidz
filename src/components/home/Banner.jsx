import { fontBangla } from "@/app/layout";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h1 className={`${fontBangla.className} text-6xl font-bold leading-20`}>
          আপনার শিশুকে একটি সুন্দর <br />
          <span className="text-primary">ভবিষ্যৎ দিন</span>
        </h1>
        <p className="text-xl font-semibold">
          Buy Every toy with up to 15% Discount
        </p>
        <button className="btn btn-primary">Explore Products</button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Image
          alt="hero-image"
          src={"/assets/hero.png"}
          width={500}
          height={400}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
