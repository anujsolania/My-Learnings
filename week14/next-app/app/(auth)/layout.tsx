
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={""}
      >
        <div className=" text-center p-4 border-b" >
         10% off on SINUP/SIGNIN
        </div>
        {children}
      </body>
    </html>
  );
}