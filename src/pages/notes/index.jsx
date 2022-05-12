import React from "react";
import Link from "next/link";

const Notes = () => (
  <div>
    <h1>Notes Page</h1>

    <Link href="/notes/[id]" as={`/notes/1`}>
      <a>Go To Notes 1</a>
    </Link>
  </div>
);

export default Notes;
