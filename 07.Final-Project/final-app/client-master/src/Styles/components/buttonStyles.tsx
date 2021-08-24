import { darken, mode, whiten } from "@chakra-ui/theme-tools"

export const ButtonStyles = {
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        primary:(props)=>({
            bg: "primary",
            color:"white",
            _hover: {
                bg: mode(darken("primary", 20), whiten("primary",20))(props),
            }
        })
    },
    // The default `size` or `variant` values
    defaultProps: {
        variant: "primary"
    },
  }