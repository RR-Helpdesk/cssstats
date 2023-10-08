/** @jsx jsx */
import { useState } from 'react'
import { Container, Styled, jsx, useColorMode } from 'theme-ui'
import { GitHub, Twitter, Moon } from 'react-feather'
import { Helmet } from 'react-helmet'

import { Logo, Link, Label, Input } from './ui'

import favicon16 from '../images/favicon-16.png'
import favicon32 from '../images/favicon-32.png'
import favicon64 from '../images/favicon-64.png'
import "../styles.css"

export default ({ title, initialUrl, onUrlChange, children }) => {
  const [url, setUrl] = useState(initialUrl)
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div>
      <style>{`* { box-sizing: border-box; }`}</style>
      <Helmet
        title={'REVREBEL CSS Stats'}
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
      <Styled.root>
        <header
          sx={{
            fontWeight: 'bold',
            p: [1, 2, 3],
            mb: 3,
            '& a': {
              color: 'primary',
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
                }}
              >
                <Logo size={32} />
                <span
                  sx={{
                    ml: 2,
                    fontSize: 3,
                    fontFamily: 'Khand',
                    display: ['none', 'block'],
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  RR CSS Stats
                </span>
              </span>
            </Link>

            {initialUrl ? (
              <div sx={{ px: 3, width: ['90%'] }}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    onUrlChange(url)
                  }}
                >
                  <Label display="none">Url</Label>
                  <Input
                    placeholder="Url to extract CSS stats"
                    inputMode="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    sx={{ color: 'text' }}
                  />
                </form>
              </div>
            ) : null}

            <div
              sx={{
                ml: 'auto',
                mr: 2,
                width: 96,
                display: 'flex',
                color: "blue",
                alignItems: 'center',
              }}
            >
              <Styled.a
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
              </Styled.a>
              <Styled.a
                sx={{ mr: 3 }}
                href="https://mobile.twitter.com/cssstats"
              >
                <Twitter />
              </Styled.a>
              <Styled.a href="https://github.com/cssstats">
                <GitHub />
              </Styled.a>
            </div>
          </div>
        </header>
        <title children={title || 'CSS Stats'} />
        <Container sx={{ maxWidth: '72rem', pb: 4 }}>{children}</Container>
      </Styled.root>
    </div>
  )
}
