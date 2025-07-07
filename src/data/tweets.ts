import type { TweetData } from '../components/Tweet';

export const tweetsData: TweetData[] = [
  {
    id: '1',
    content: 'Just shipped a new feature using React Server Components. The performance improvements are incredible! 🚀 Building the future of web development one component at a time. #React #WebDev #TypeScript',
    timestamp: '2h',
    likes: 24,
    retweets: 8,
    replies: 3,
  },
  {
    id: '2',
    content: 'Working on a new TypeScript project and loving the developer experience. Type safety makes such a difference in large codebases. The tooling ecosystem has come so far! 💪',
    timestamp: '4h',
    likes: 18,
    retweets: 5,
    replies: 7,
    isRetweet: true,
    retweetedBy: 'Joshua Does for President 2036'
  },
  {
    id: '3',
    content: 'Hot take: Learning fundamentals (HTML, CSS, JS) is still more important than jumping straight to frameworks. Build your foundation first! 💪\n\nWhat do you think? Drop your thoughts below 👇',
    timestamp: '1d',
    likes: 42,
    retweets: 15,
    replies: 12,
  },
  {
    id: '4',
    content: 'Excited to be speaking at the upcoming tech meetup about "Building Modern Web Apps with TypeScript". See you there! 🎤\n\nTopics covered:\n• Type safety best practices\n• Advanced TypeScript patterns\n• Real-world project examples',
    timestamp: '2d',
    likes: 31,
    retweets: 12,
    replies: 5,
    hasImage: true,
    imageUrl: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '5',
    content: 'Just discovered a new VS Code extension that has changed my workflow completely. The little things that make development more enjoyable ✨\n\nProductivity tip: Invest time in your development environment. It pays dividends!',
    timestamp: '3d',
    likes: 27,
    retweets: 9,
    replies: 8,
  },
  {
    id: '6',
    content: 'Building a personal portfolio website with vanilla TypeScript and Tailwind CSS. Sometimes going back to basics is exactly what you need. Clean, fast, and maintainable! 🎯',
    timestamp: '5d',
    likes: 35,
    retweets: 11,
    replies: 6,
  },
  {
    id: '7',
    content: 'Malas',
    timestamp: '7d',
    likes: 32345,
    retweets: 1534,
    replies: 6323,
  }  
];