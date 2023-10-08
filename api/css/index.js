const { send } = require('micro')
const cors = require('micro-cors')()
const getCss = require('get-css')
const getParam = require('get-query-param')
const isUrl = require('is-url')
const isPresent = require('is-present')
const normalizeUrl = require('normalize-url')
const cssbeautify = require('cssbeautify')

const isValidUrl = (url) => isPresent(url) && isUrl(url)

const cssApi = async (req, res) => {
  const url = getParam('url', req.url)

  const fullUrl = url && normalizeUrl(url, { stripAuthentication: false })

  if (!isValidUrl(fullUrl)) {
    return send(res, 406, {
      error: 'unacceptable',
      message: 'Url is invalid',
    })
  }

  try {
    const css = await getCss(fullUrl)
    css.css = cssbeautify(css.css)

    send(res, 200, { css })
  } catch (e) {
    console.log(e)
    send(res, 500, {
      error: 'server_error',
      message: 'Something went wrong',
      stack: e,
    })
  }
}

module.exports = cors(cssApi)
