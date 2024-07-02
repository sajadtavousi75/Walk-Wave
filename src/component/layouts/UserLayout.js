import React from 'react'
import Sidebar from '../modules/Sidebar/Sidebar'

export default function UserLayout({children}) {
  return (
    <html>
        <body>
            <div className="main flex">
                <Sidebar />
                {children}
            </div>
        </body>
    </html>
  )
}
