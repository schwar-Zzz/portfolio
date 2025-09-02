import pic from '@/assets/words-with-backgrounds.gif' 
import pic2 from '@/assets/Screenshot145954.png'

export const projects = [
  {
    id: '1',
    title: 'Wordle clone',
    description: 'Wordle game clone using React.js, CSS, and React Hooks.Implemented interactive gameplay logic and responsive UI for an engaging user experience',
    image: pic,
    stack: ['React', 'Css', 'Hooks'],
    liveUrl: 'https://worldclone.vercel.app/',
    githubUrl: 'https://github.com/schwar-Zzz/wordl-clone',
    featured: true
  },
  {
    id: '2',
    title: 'Weather app',
    description: 'Weather App – Built with React to fetch and display real-time weather data, with error handling and persistent search history. Optimized performance using React.memo, useCallback, and lifted state for smooth component interaction.',
    image: pic2,
    stack: ['React', 'Css', 'Hooks', 'openweathermap api'],
    liveUrl: 'https://schwrazstudioweather-app.vercel.app/',
    githubUrl: 'https://github.com/schwar-Zzz/Weather_App',
    featured: true 
  }
];


export default projects;