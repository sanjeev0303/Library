import React from 'react'

type Props = {}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-row">
    {/* <Sidebar session={session} /> */}

    <div className="admin-container">
      {/* <Header session={session} /> */}
      {children}
    </div>
  </main>
  )
}

export default Layout
