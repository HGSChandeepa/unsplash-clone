"use client";

import { Button } from "react-bootstrap";

//the props
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>Error in this page</h1>
      <Button onClick={reset}> try resetting</Button>
    </div>
  );
}
