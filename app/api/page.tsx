"use client";

// useEffectは、Client Componentでのみ利用できる機能
import { useEffect } from "react";

// Homeという画面（コンポーネント）を定義
export default function Home() {
  // コンポーネントがマウントされたときだけ、FastAPIにGETリクエストを送る
  useEffect(() => {
    fetch("http://localhost:8000/api/hello")
      // サーバーから返ってきたデータをJSON形式に変換
      .then(res => res.json())
      // 変換したデータをコンソールに表示
      .then(data => console.log(data));
  }, []); // []があるので、初回レンダリング時のみ実行
}
