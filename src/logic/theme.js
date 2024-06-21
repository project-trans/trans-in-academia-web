export function getTheme() {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme')
    }
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
        return 'light'
    }
    return 'unset'
}

export function setTheme(theme) {
    localStorage.setItem('theme', theme)
}

export function applyTheme() {
    document.documentElement.setAttribute('data-theme', getTheme())
}