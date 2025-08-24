export function Socials() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdelbasset-hadfani-441a5319a/', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Email', url: 'mailto:your@email.com', icon: '📧' }
  ];

  return (
    <div className="flex gap-4 mt-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:scale-110 transition-transform"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
