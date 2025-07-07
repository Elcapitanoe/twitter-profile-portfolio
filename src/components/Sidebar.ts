import { createThemeToggle } from './ThemeToggle';

export function createSidebar(): HTMLElement {
  const sidebar = document.createElement('aside');
  sidebar.className = 'w-64 bg-white dark:bg-black p-4 flex flex-col min-h-screen';
  
  sidebar.innerHTML = `
    <div class="flex items-center space-x-3 mb-8">
      <div class="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
        <svg class="w-5 h-5 text-white dark:text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
    </div>
    
    <nav class="flex-1 space-y-2">
      <a href="#home" class="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-xl">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
        <span class="font-normal">Home</span>
      </a>
      
      <a href="#explore" class="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-xl">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <span class="font-normal">Explore</span>
      </a>
      
      <a href="#notifications" class="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-xl relative">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 1 6 6v2.25a2.25 2.25 0 0 0 2.25 2.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h2.25A2.25 2.25 0 0 0 7.5 12V9.75a6 6 0 0 1 6-6Z"></path>
        </svg>
        <span class="font-normal">Notifications</span>
        <div class="absolute top-2 left-6 w-2 h-2 bg-blue-500 rounded-full"></div>
      </a>
      
      <a href="#messages" class="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-xl">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span class="font-normal">Messages</span>
      </a>
      
      <a href="#bookmarks" class="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-xl">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
        </svg>
        <span class="font-normal">Bookmarks</span>
      </a>
      
      <a href="#communities" class="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-xl">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        <span class="font-normal">Communities</span>
      </a>
      
      <a href="#premium" class="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-xl">
        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        <span class="font-normal">Premium</span>
      </a>
      
      <a href="#profile" class="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-xl">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <span class="font-normal">Profile</span>
      </a>
      
      <a href="#more" class="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-xl">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
        <span class="font-normal">More</span>
      </a>
    </nav>
    
    <button class="bg-blue-500 text-white rounded-full py-3 px-8 font-bold text-lg hover:bg-blue-600 transition-colors mb-4">
      Post
    </button>
    
    <div class="flex items-center justify-between p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors cursor-pointer">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          DA
        </div>
        <div>
          <div class="font-bold text-sm">Domi Adiwijaya</div>
          <div class="text-gray-500 text-sm">@DomiAdiwijaya</div>
        </div>
      </div>
      <div id="theme-toggle-container"></div>
    </div>
  `;
  
  const themeToggleContainer = sidebar.querySelector('#theme-toggle-container');
  if (themeToggleContainer) {
    themeToggleContainer.appendChild(createThemeToggle());
  }
  
  return sidebar;
}