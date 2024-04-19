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

function setThemeToDark() {
    

changeCSSTheme("dark")
}

function setThemeToLight() {
    

    changeCSSTheme("light")
    }
  

function toggleTheme() { 
    let currentColor = getComputedStyle(document.documentElement).getPropertyValue("--background")

    console.log("Current background color is: " + currentColor)
    if (currentColor === "white" ) {
        setThemeToDark()
    } else {
        setThemeToLight()
    }
}

