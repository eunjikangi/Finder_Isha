import Header from "./Header";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
} 