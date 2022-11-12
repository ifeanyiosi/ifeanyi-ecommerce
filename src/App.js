import React from 'react'
import { FlexContent, Hero, Sales,  } from './components'
import { heroapi, popularsales, toprateslaes, highlight, sneaker } from './data/data.js'

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
    </>
  );
}

export default App