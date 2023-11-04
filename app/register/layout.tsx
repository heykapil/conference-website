export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto mt-10 h-full px-4 lg:px-0 w-full max-w-3xl">
      {children}
    </div>
  );
}
