declare module 'gray-matter' {
  export default function matter(input: string): {
    data: Record<string, any>;
    content: string;
  };
}