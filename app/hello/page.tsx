import Link from "next/link";

// 型定義
type Hello = {
  status: string;
};

// APIのURLを環境変数から取得
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// APIからデータを取得する関数（fetchを使用）
async function getHelloStatus(): Promise<Hello> {
  const res = await fetch(`${API_URL}`, {
    cache: "no-store",
  });
  return res.json();
}

// Next.jsのページコンポーネント
export default async function HelloPage() {
  const helloData = await getHelloStatus();

  return (
    <main>
      <h1>疎通確認</h1>
      <p>ステータスは、{helloData.status}</p>
    </main>
  );
}
