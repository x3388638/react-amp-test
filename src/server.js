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
      canonical: 'http://y.y:7774/',
      headComponents: null
    })
  )
})

app.listen(7774, () => {
  console.log('asd')
})
