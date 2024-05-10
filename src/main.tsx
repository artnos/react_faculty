import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"


const theme = {
    colorPalette: {
        purple: "#511c74",
        red: "#ee3c2d",
    },
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={extendTheme(theme)}>
            <App />
      </ChakraProvider>
  </React.StrictMode>,
)
