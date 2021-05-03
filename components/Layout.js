import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Moon, Sun, GitHub } from 'react-feather'

import { FAVICON } from '../constants/AppConstants'

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setDarkMode(window.localStorage.getItem('DARK_MODE') === 'true')
    setMounted(true)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('DARK_MODE', darkMode)
  }, [darkMode])

  if (!mounted) return <div />

  if (typeof document !== 'undefined') {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  return (
    <div className={`theme--${darkMode ? `dark` : 'light'}`}>
      <Head>
        <link rel="icon" href={FAVICON} />
        <link rel="stylesheet" href="https://use.typekit.net/hxw8tgn.css" />
        <title>CodingHub Resource</title>
      </Head>

      <div className="logo">
        <div className="symbol">⧩</div>
        <div className="label">[ free resources ]</div>
      </div>

      <div className="theme-switch" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun /> : <Moon />}
      </div>

      <div>
        {children}
      </div>

      <footer>
        <a href="https://github.com/fu43 03/codinghub-resources" target="_blank">
          <GitHub />
        </a>
        <br />
        Created by <a href="https://twitter.com/telmo" target="_blank">@fu4303</a>
      </footer>
    </div>
  )
}

export default Layout
