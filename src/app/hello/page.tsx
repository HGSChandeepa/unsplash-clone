import { resolve } from "path";
import React from "react";

export default async function page() {
  //create a dummy timeout
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>page</div>;
}
