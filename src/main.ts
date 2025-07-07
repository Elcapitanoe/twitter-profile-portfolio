import './style.css';
import { createSidebar } from './components/Sidebar';
import { createProfileHeader } from './components/ProfileHeader';
import { createTabNavigation } from './components/TabNavigation';
import { createTweet } from './components/Tweet';
import { createRightSidebar } from './components/RightSidebar';
import { tweetsData } from './data/tweets';

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
}

// Set page title and meta tags
document.title = 'Domi Adiwijaya (@DomiAdiwijaya) / X';

// Add meta tags
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Tech Enthusiast & Full-Stack Developer. Building the future of web development.';
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'Domi Adiwijaya, web developer, full-stack developer, TypeScript, React, Node.js';
document.head.appendChild(metaKeywords);

// Open Graph meta tags
const ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = 'Domi Adiwijaya (@DomiAdiwijaya) / X';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.setAttribute('property', 'og:description');
ogDescription.content = 'Tech Enthusiast & Full-Stack Developer';
document.head.appendChild(ogDescription);

// Get the app container
const app = document.querySelector<HTMLDivElement>('#app')!;

// Initialize theme before rendering
initializeTheme();

// Clear existing content and set up layout
app.innerHTML = '';
app.className = 'min-h-screen bg-white dark:bg-black flex justify-center';

// Create main layout container
const layoutContainer = document.createElement('div');
layoutContainer.className = 'flex w-full max-w-6xl';

// Create sidebar
const sidebar = createSidebar();

// Create main content with 600px max width
const mainContent = document.createElement('main');
mainContent.className = 'flex-1 max-w-[600px] border-x border-gray-200 dark:border-gray-800 min-h-screen';

// Create right sidebar
const rightSidebar = createRightSidebar();

// Create profile content
const profileHeader = createProfileHeader();
const tabNavigation = createTabNavigation();

// Create tweets container
const tweetsContainer = document.createElement('div');
tweetsContainer.className = 'divide-y divide-gray-200 dark:divide-gray-800';

// Add all tweets
tweetsData.forEach(tweetData => {
  const tweet = createTweet(tweetData);
  tweetsContainer.appendChild(tweet);
});

// Assemble main content
mainContent.appendChild(profileHeader);
mainContent.appendChild(tabNavigation);
mainContent.appendChild(tweetsContainer);

// Assemble layout
layoutContainer.appendChild(sidebar);
layoutContainer.appendChild(mainContent);
layoutContainer.appendChild(rightSidebar);

// Append layout to app
app.appendChild(layoutContainer);

// Add responsive behavior for mobile
function handleResize() {
  const isMobile = window.innerWidth < 1024;
  
  if (isMobile) {
    sidebar.classList.add('hidden');
    rightSidebar.classList.add('hidden');
    layoutContainer.classList.add('justify-center');
    mainContent.classList.remove('border-x');
  } else {
    sidebar.classList.remove('hidden');
    rightSidebar.classList.remove('hidden');
    layoutContainer.classList.remove('justify-center');
    mainContent.classList.add('border-x');
  }
}

window.addEventListener('resize', handleResize);
handleResize(); // Initial check