export function createThemeToggle(): HTMLElement {
  const themeToggle = document.createElement('button');
  themeToggle.className = 'p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors';
  themeToggle.setAttribute('aria-label', 'Toggle theme');
  
  const updateIcon = () => {
    const isDark = document.documentElement.classList.contains('dark');
    themeToggle.innerHTML = isDark 
      ? `<svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
         </svg>`
      : `<svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
         </svg>`;
  };
  
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    updateIcon();
  });
  
  updateIcon();
  return themeToggle;
}