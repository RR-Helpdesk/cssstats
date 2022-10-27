/** @jsx jsx */
import { useState } from 'react'
import { Container, jsx, useColorMode } from 'theme-ui'
import { Themed } from '@theme-ui/mdx'
import { GitHub, Twitter, Moon } from 'react-feather'
import { Helmet } from 'react-helmet'

import { Logo, Link, Label, Input } from './ui'

import favicon16 from '../images/favicon-16.png'
import favicon32 from '../images/favicon-32.png'
import favicon64 from '../images/favicon-64.png'

export default ({ title, initialUrl, onUrlChange, children }) => {
  const [url, setUrl] = useState(initialUrl)
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div>
      <style>{`* { box-sizing: border-box; } html, body { font-family: Inter,-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, 'Helvetica Neue', system, sans-serif; } code, pre { font-family: monospace; }`}</style>
      <Helmet
        title={'CSS Stats'}
        meta={[
          {
            name: 'description',
            content: 'Potentially interesting stats on stylesheets',
          },
        ]}
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${favicon16}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${favicon32}`,
          },
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
        ]}
      />
        <header
          sx={{
            fontWeight: 'bold',
            p: [1, 2, 3],
            mb: 3,
            boxShadow: '0 0px 0px 1px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.2)',
            '& a': {
              color: 'black',
              textDecoration: 'none',
            },
          }}
        >
          <div
            sx={{
              display: 'flex',
              width: '100%',
              maxWidth: '100%',
              alignItems: 'center',
              flexWrap: 'nowrap',
            }}
          >
            <Link href="/" ml={2} color="text">
              <span
                sx={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  color: 'text',
                }}
              >
                <Logo size={32} />
                <span
                  sx={{
                    ml: 2,
                    fontSize: 0,
                    display: ['none', 'block'],
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  CSS Stats
                </span>
              </span>
            </Link>

            {initialUrl ? (
              <div sx={{ px: 3, width: ['100%'] }}>
                <form
                  sx={{ width: '100%', display: 'flex', justifyContent: 'center',  }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    onUrlChange(url)
                  }}
                >
                  <label sx={{width: '100%', display: 'block'}}><span sx={{ display: 'none' }}>URL</span>
                  <input
                    placeholder="Url to extract CSS stats"
                    inputMode="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    sx={{ 
                      color: 'text', 
                      appearance: 'none', 
                      WebkitAppearance: 'none', 
                      border: 0, 
                      boxShadow: '0 0 0 1px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.2)',
                      p: 3,
                      width: '100%',
                        
                    }}
                  />
                </label>
                </form>
              </div>
            ) : null}

            <div
              sx={{
                ml: 'auto',
                mr: 2,
                width: 96,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <a
                sx={{
                  mr: 3,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setColorMode(colorMode === 'light' ? 'dark' : 'light')
                }}
                title="Toggle color mode"
              >
                <Moon />
              </a>
              <a
                sx={{ mr: 3 }}
                href="https://mobile.twitter.com/cssstats"
              >
                <Twitter />
              </a>
              <a href="https://github.com/cssstats">
                <GitHub />
              </a>
            </div>
          </div>
        </header>
        <title children={title || 'CSS Stats'} />
        <div>{children}</div>
    </div>
  )
}
