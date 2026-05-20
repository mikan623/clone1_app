"use client";

// useEffectは、Client Componentでのみ利用できる機能
import { useEffect, useState } from "react";

// Homeという画面（コンポーネント）を定義
export default function Home() {
  // FastAPIのデータを保存するためのステートを用意する（初期値は空文字 ""）
  const [message, setMessage] = useState("");
  // コンポーネントがマウントされたときだけ、FastAPIにGETリクエストを送る
  useEffect(() => {
    fetch("http://localhost:8000/api/hello")
      // サーバーから返ってきたデータをJSON形式に変換
      .then(res => res.json())
      // 変換したデータをコンソールに表示
      .then(data => {
        // 取得したデータ（例: data.message）をステートに保存する
        // ※FastAPIの返却データが { "message": "..." } の場合を想定
        setMessage(data.message || JSON.stringify(data));
      });
  }, []); // []があるので、初回レンダリング時のみ実行

  // ステートに入った値を波括弧 { } で囲んで表示する
  return <div>{message || "読み込み中..."}</div>;
}