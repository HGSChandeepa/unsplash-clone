import React from "react";
import Link from "next/link";

export default function notfound() {
  return (
    <div>
      <h1>404 page</h1>
      <p>sorry this page dose not exist</p>
      <Link href={"/"}>GO TO HOME PAGE</Link>
    </div>
  );
}
