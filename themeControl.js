const themes = {
    light: {
        background: "white",
        color: "darkGrey"
    },
    dark: {
        background: "darkGrey",
        color: "ffffff"
    }
}


function changeCSSTheme(themeName) {
    for (const variable in themes[themeName]) {
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable])
        console.log("Updated css variable", variable)
    }
}


changeCSSTheme("dark")