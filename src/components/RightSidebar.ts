export function createRightSidebar(): HTMLElement {
  const sidebar = document.createElement('aside');
  sidebar.className = 'w-80 bg-white dark:bg-black p-4 space-y-4 min-h-screen';
  
  sidebar.innerHTML = `
    <!-- Search Bar -->
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input type="text" placeholder="Search" 
             class="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-900 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white placeholder-gray-500">
    </div>
    
    <!-- Who to Follow -->
    <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4">
      <h2 class="text-xl font-bold text-black dark:text-white mb-4">Who to follow</h2>
      
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              IG
            </div>
            <div>
              <div class="font-bold text-black dark:text-white text-sm">Instagram</div>
              <div class="text-gray-500 text-sm">@domi.adiwijaya</div>
            </div>
          </div>
          <button class="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full font-bold text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Follow
          </button>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              FB
            </div>
            <div>
              <div class="font-bold text-black dark:text-white text-sm">Facebook</div>
              <div class="text-gray-500 text-sm">Domi Adiwijaya</div>
            </div>
          </div>
          <button class="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full font-bold text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Follow
          </button>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              EM
            </div>
            <div>
              <div class="font-bold text-black dark:text-white text-sm">E-Mail</div>
              <div class="text-gray-500 text-sm">hello@domiadi.com</div>
            </div>
          </div>
          <button class="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full font-bold text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Follow
          </button>
        </div>
      </div>
      
      <button class="text-blue-500 hover:underline text-sm mt-3">
        Show more
      </button>
    </div>
    
    <!-- Trending -->
    <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4">
      <h2 class="text-xl font-bold text-black dark:text-white mb-4">What's happening</h2>
      
      <div class="space-y-3">
        <div class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded cursor-pointer transition-colors">
          <div class="text-gray-500 text-sm">Trending in Technology</div>
          <div class="font-bold text-black dark:text-white">React 19</div>
          <div class="text-gray-500 text-sm">109K posts</div>
        </div>
        
        <div class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded cursor-pointer transition-colors">
          <div class="text-gray-500 text-sm">Trending in Technology</div>
          <div class="font-bold text-black dark:text-white">TypeScript</div>
          <div class="text-gray-500 text-sm">45.2K posts</div>
        </div>
        
        <div class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded cursor-pointer transition-colors">
          <div class="text-gray-500 text-sm">Trending in Programming</div>
          <div class="font-bold text-black dark:text-white">Next.js</div>
          <div class="text-gray-500 text-sm">32.1K posts</div>
        </div>
        
        <div class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded cursor-pointer transition-colors">
          <div class="text-gray-500 text-sm">Trending in Web Development</div>
          <div class="font-bold text-black dark:text-white">Tailwind CSS</div>
          <div class="text-gray-500 text-sm">18.7K posts</div>
        </div>
      </div>
      
      <button class="text-blue-500 hover:underline text-sm mt-3">
        Show more
      </button>
    </div>
    
    <!-- Footer Links -->
    <div class="text-xs text-gray-500 space-y-2">
      <div class="flex flex-wrap gap-x-3 gap-y-1">
        <a href="#" class="hover:underline">Terms of Service</a>
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Cookie Policy</a>
        <a href="#" class="hover:underline">Accessibility</a>
        <a href="#" class="hover:underline">Ads info</a>
        <a href="#" class="hover:underline">More...</a>
      </div>
      <div>© 2025 X Corp.</div>
    </div>
  `;
  
  return sidebar;
}