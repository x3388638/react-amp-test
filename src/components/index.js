import React from 'react'

export default () => (
  <div style={{ maxWidth: '500px', margin: '0 auto' }}>
    <amp-img src='https://fakeimg.pl/350x200/?text=Hello' height='200' width='350' layout='responsive' />
    <div dangerouslySetInnerHTML={{ __html: '<h1 [text]="text">Hello World</h1>' }} />
    <input style={{ width: '100%' }} type='text' on='input-throttled:AMP.setState({ text: event.value })' />
  </div>
)
