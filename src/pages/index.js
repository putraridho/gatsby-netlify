import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <p>
        <Link to="/blog">View Blog</Link>
      </p>
    </>
  )
}
