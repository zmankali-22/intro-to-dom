const themes = {
    light: {
        background: "#fff",
        color: "dark grey"
    },
    dark: {
        background: "#darkGrey",
        color: "000000"
    }
}


function changeCSSTheme(themeName) {
    for (const theme in themes[themeName]) {
        document.documentElement.style.setProperty(`--${theme}`, themes[themeName][theme])
        console.log("Updated css variable", theme)
    }
}


changeCSSTheme("dark")