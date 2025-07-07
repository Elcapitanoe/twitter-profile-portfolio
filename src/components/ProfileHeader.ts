export function createProfileHeader(): HTMLElement {
  const header = document.createElement('div');
  header.className = 'relative';
  
  header.innerHTML = `
    <!-- Cover Photo -->
    <div class="h-48 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 relative">
      <img src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop" 
           alt="Cover" 
           class="w-full h-full object-cover">
    </div>
    
    <!-- Profile Info -->
    <div class="px-4 pb-4">
      <!-- Profile Picture -->
      <div class="relative -mt-16 mb-4">
        <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-4 border-white dark:border-black flex items-center justify-center text-white text-4xl font-bold">
          DA
        </div>
        <button class="absolute bottom-2 right-2 w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center border-2 border-white dark:border-black">
          <svg class="w-4 h-4 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </button>
      </div>
      
      <!-- Edit Profile Button -->
      <div class="flex justify-end mb-4">
        <button class="border border-gray-300 dark:border-gray-600 rounded-full px-4 py-1.5 font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
          Edit profile
        </button>
      </div>
      
      <!-- Name and Handle -->
      <div class="mb-3">
        <div class="flex items-center space-x-2">
          <h1 class="text-xl font-bold text-black dark:text-white">Domi Adiwijaya</h1>
          <svg class="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </div>
        <div class="text-gray-500">@DomiAdiwijaya</div>
      </div>
      
      <!-- Bio -->
      <div class="mb-3">
        <p class="text-black dark:text-white">Tech Enthusiast & Full-Stack Developer</p>
      </div>
      
      <!-- Location and Join Date -->
      <div class="flex items-center space-x-4 text-gray-500 text-sm mb-3">
        <div class="flex items-center space-x-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span>Indonesia</span>
        </div>
        <div class="flex items-center space-x-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
          <span>Joined February 1999</span>
        </div>
      </div>
      
      <!-- Following/Followers -->
      <div class="flex items-center space-x-4 text-sm">
        <div class="hover:underline cursor-pointer">
          <span class="font-bold text-black dark:text-white">100</span>
          <span class="text-gray-500">Following</span>
        </div>
        <div class="hover:underline cursor-pointer">
          <span class="font-bold text-black dark:text-white">26 M</span>
          <span class="text-gray-500">Followers</span>
        </div>
      </div>
    </div>
  `;
  
  return header;
}