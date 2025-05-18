import Header from "../home/Header";

export default function VideosStoriesLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
} 