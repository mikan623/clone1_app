import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/medimo_home_img.png";
export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Image 
          src={logoImage} 
          alt="medimo_home_img" 
          width={150} // 実際の表示サイズに合わせる
          height={40} 
          priority // ヘッダー画像など、最優先で読み込ませたい場合に指定
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
  );
}