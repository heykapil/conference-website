export default function SpeakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full max-w-3xl mx-auto">{children}</main>;
}
