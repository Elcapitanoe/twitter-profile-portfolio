export function createTabNavigation(): HTMLElement {
  const nav = document.createElement('nav');
  nav.className = 'border-b border-gray-200 dark:border-gray-800';
  
  nav.innerHTML = `
    <div class="flex">
      <button class="flex-1 py-4 text-center font-medium border-b-2 border-blue-500 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
        Posts
      </button>
      <button class="flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
        Replies
      </button>
      <button class="flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
        Highlights
      </button>
      <button class="flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
        Articles
      </button>
      <button class="flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
        Media
      </button>
      <button class="flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
        Likes
      </button>
    </div>
  `;
  
  return nav;
}