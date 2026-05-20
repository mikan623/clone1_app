import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/medimo_home_img.png";

export default function Header() {
  return (
    <>
      <div className="bg-gray-100 text-white py-1 text-center text-sm">
        <div className="max-w-6xl mx-auto flex justify-end items-center px-4">
          {/* <span>アカウントをお持ちですか？</span> */}
          <Link 
            href="/auth/sign-in" 
            className="ml-2 hover:bg-gray-300 text-black font-semibold py-1 px-3 rounded transition-colors"
          >
            ログイン
          </Link>
        </div>
      </div>
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Image 
            src={logoImage} 
            alt="medimo_home_img" 
            width={150} 
            height={40} 
            priority
          />

          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-gray-500">
              medimoとは
            </Link>
            <Link href="/function" className="hover:text-gray-500">
              機能紹介
            </Link>
            <Link href="/linkage" className="hover:text-gray-500">
              カルテ連携
            </Link>
            <Link href="/price" className="hover:text-gray-500">
              料金
            </Link>
            <Link href="/case" className="hover:text-gray-500">
              導入事例
            </Link>
            <Link href="/document/service-document" className="hover:text-gray-500">
              資料請求
            </Link>
            <Link href="/document/price-document" className="hover:text-gray-500">
              料金表
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};