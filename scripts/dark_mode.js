if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'moz_ai_guide_base_dark')
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.setAttribute('data-theme', 'moz_ai_guide_base')
    document.documentElement.classList.remove('dark')
}