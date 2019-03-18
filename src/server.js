import express from 'express'
import React from 'react'
import Component from './components/index'

const app = express()
app.get('/', (req, res) => {
  const ampHtmlRenderer = require('../dist/AmpHtmlRenderer.js')

  res.send(
    ampHtmlRenderer({
      entryName: 'main',
      AppComponent: <Component />,
      title: 'lalal',
      canonical: 'http://127.0.0.1:7774/',
      headComponents: <script async custom-element='amp-bind' src='https://cdn.ampproject.org/v0/amp-bind-0.1.js' />
    })
  )
})

app.listen(7774, () => {
  console.log('Server started on port 7774.')
})
