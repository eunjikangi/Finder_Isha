import Header from "../home/Header";

export default function MyLessonsLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
} 