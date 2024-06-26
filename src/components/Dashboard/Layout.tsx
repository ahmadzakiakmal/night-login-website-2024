import DashboardLogo from "@/../public/assets/images/DasboardLogo.png";
import ArrowL from "@/../public/assets/images/icons/ArrowLeft.png";
import Image from "next/image";
import Link from "next/link";
import { JSXElementConstructor, ReactComponentElement, ReactNode, useState } from "react";
import Home from "@/../public/assets/images/icons/Home.png";
import HomeActive from "@/../public/assets/images/icons/HomeActive.png";
import Request from "@/../public/assets/images/icons/Request.png";
import RequestActive from "@/../public/assets/images/icons/RequestActive.png";
import History from "@/../public/assets/images/icons/History.png";
import HistoryActive from "@/../public/assets/images/icons/HistoryActive.png";
import Guide from "@/../public/assets/images/icons/Guide.png";
import GuideActive from "@/../public/assets/images/icons/GuideActive.png";
import Faq from "@/../public/assets/images/icons/Faq.png";
import FaqActive from "@/../public/assets/images/icons/FaqActive.png";
import Logout from "@/../public/assets/images/icons/Logout.png";

import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

interface MenuItem {
  title: string;
  icon: any;
  link: string;
}

  export default function DashboardLayout({children}: {children:ReactNode}) {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const r = useRouter();
  return (
    <main className="flex min-h-screen">
      <aside className="flex-shrink-0 bg-white w-[285px] border-r-2 border-[#DEDEDE]/90 pt-[24.5px] px-[32px]">
        <Link href={"/"}>
          <button
            className="font-semibold flex items-center gap-5 hover:text-red transition text-[14px] lg:text-[16px] mb-[15px]"
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
          >
            <Image
              className={isBtnHovered ? "animate-bounce-x" : ""}
              src={ArrowL}
              alt=""
            />
            Back to Home
          </button>
        </Link>
        <Image
          src={DashboardLogo}
          alt="Dashboard Logo"
        />
        <h1 className="font-jakarta font-semibold mt-[25px]">MAIN MENU</h1>
        <div className="mt-[28px] min-h-[50%] flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <MenuItem
              title="Main Menu"
              icon={r.pathname === "/dashboard" ? HomeActive : Home}
              active={r.pathname === "/dashboard"}
              link="/dashboard"
            />
            <MenuItem
              title="Request"
              icon={r.pathname === "/dashboard/request" ? RequestActive : Request}
              active={r.pathname === "/dashboard/request"}
              link="/dashboard/request"
            />
            <MenuItem
              title="History"
              icon={r.pathname === "/dashboard/history" ? HistoryActive : History}
              active={r.pathname === "/dashboard/history"}
              link="/dashboard/history"
            />
            <MenuItem
              title="Guide"
              icon={r.pathname === "/dashboard/guide" ? GuideActive : Guide}
              active={r.pathname === "/dashboard/guide"}
              link="/dashboard/guide"
            />
            <MenuItem
              title="FAQ"
              icon={r.pathname === "/dashboard/faq" ? FaqActive : Faq}
              active={r.pathname === "/dashboard/faq"}
              link="/dashboard/faq"
            />
          </div>
            <button onClick={() => {
              signOut({
                callbackUrl: "/", // Define the callback URL here
              }).then(() => {
                r.replace("/");
              });
            }} className="font-jakarta w-full flex justify-start items-center px-4 py-[14px] gap-3 text-[#A3A3A3] hover:bg-red/70 active:bg-red hover:text-white transition rounded-[10px]">
              <Image
                src={Logout}
                alt=""
              />
              <span>Logout</span>
            </button>
        </div>
      </aside>
      <aside className="w-full">
        {children}
      </aside>
    </main>
  );
}

function MenuItem({ title, link, icon, active }: { title: string; link: string; icon: any; active: boolean }) {
  return (
    <Link href={link}>
      <button
        className={
          "px-4 py-[14px] font-jakarta flex justify-start items-center gap-3 w-full font-semibold rounded-[10px] transition hover:bg-red/70 " +
          (active ? "!bg-red text-white" : "text-[#A3A3A3]")
        }
      >
        <Image
          src={icon}
          alt=""
        />
        <span>{title}</span>
      </button>
    </Link>
  );
}
