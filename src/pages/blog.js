import React from "react"

import BlogRoll from "../components/BlogRoll"

export default function BlogIndexPage() {
  return (
    <>
      <h1>Latest Posts</h1>
      <section>
        <div className="content">
          <BlogRoll />
        </div>
      </section>
    </>
  )
}
