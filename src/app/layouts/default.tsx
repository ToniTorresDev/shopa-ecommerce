import React from "react"

function DefaultLayout({ children }) {
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="w-full max-w-screen-lg justify-center">{children}</div>
    </div>
  )
}

export default DefaultLayout
