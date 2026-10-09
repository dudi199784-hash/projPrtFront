export default function AboutRootLayout({
     children 
    }: LayoutProps<"/about">) {
  return (
        <>
            <h2>소개페이지 공통</h2>
            {children}
        </>
  );
}