import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={`${styles.gradient}`}>
        <div style={{ height: "calc(100vh - 13vh)" }} className="lg:mr-14">
          <div className="h-4/5 w-full relative hidden lg:block">
            {
              <Image
                src="/hero.webp"
                fill={true}
                alt="Your alr"
                className="object-contain object-right-top"
              />
            }
          </div>

          <div className="h-1/5 flex items-center justify-center w-screen bg-[#2BE94B] text-white text-2xl font-medium text-center leading-normal xl:text-[36px]">
            How can I use Next Image instead of Bg
          </div>
        </div>
      </div>
    </>
  );
}
