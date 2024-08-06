export interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  content: string;
  authorImage: string;
  authorName: string;
  authorRole: string;
}

export interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export interface DarkModeProps {
  theme: string;
}
