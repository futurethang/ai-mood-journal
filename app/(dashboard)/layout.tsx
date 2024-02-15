'use client'
import { ReactNode } from 'react'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const links = [
  { name: 'Journals', href: '/journal' },
  { name: 'History', href: '/history' },
]

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from local storage or fallback to 'light'
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return savedTheme
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
        return 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        return 'light'
      }
    }
  })

  useEffect(() => {
    // Update local storage whenever theme changes
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="w-screen h-screen relative">
      <header className="p-4 w-full flex justify-between items-center bg-[--surface-1]">
        <h1 className="m-0">Mood</h1>
        <nav className="px-4 h-full">
          <div className="flex gap-4 items-center justify-end h-full">
            <FontAwesomeIcon
              icon={faMoon}
              className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={theme === 'light'}
                className="sr-only peer"
                onChange={toggleTheme}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <FontAwesomeIcon
                icon={faSun}
                className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              />
            </label>
          </div>
        </nav>
      </header>
      <div className="h-full w-full">
        <div className="">{children}</div>
      </div>
      <footer className="fixed left-0 bottom-0 w-full bg-[--surface-1]">
        <nav className="p-4 flex justify-between items-center">
          <ul className="p-0 m-0 flex gap-4">
            {links.map((link) => (
              <li key={link.name} className="text-xl my-4 list-none">
                <Link href={link.href} className="no-underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="not-prose">
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default DashboardLayout
