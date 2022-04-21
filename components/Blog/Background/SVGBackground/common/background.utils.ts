import { shadeColor } from "@/utils/function/color/shadeColor"
import palleteOpacity from "@/styles/utils/palleteOpacity"

const getColorSet = (color: string) => {
    const darkModeMiddleColor = shadeColor(color, -20)
    const darkModeHighColor = shadeColor(color, -40)

    return {
        light: {
            low: `${color}${palleteOpacity.opacity30}`,
            middle: `${color}${palleteOpacity.opacity60}`,
            high: `${color}${palleteOpacity.opacity90}`,
        },
        dark: {
            low: color,
            middle: darkModeMiddleColor,
            high: darkModeHighColor,
        },
    }
}

export default getColorSet
