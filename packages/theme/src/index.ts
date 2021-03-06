import { extendTheme } from "@chakra-ui/react"
import { Input } from "./components/Input"
import { Select } from "./components/Select"
import { Button } from "./components/Button"
import { Textarea } from "./components/Textarea"

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, serif",
  },
  components: {
    Button,
    Input,
    Select,
    Textarea,
  },
})
