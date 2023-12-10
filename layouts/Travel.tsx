import Container from '@/ui/Container';

export default function TravelLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Container renderBanner={() => (
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1nvdOk45T7tIo2qCdrxIh-KWoDts7zYA&ehbc=2E312F"
        width="100%"
        height="480"
      ></iframe>
    )}>
      <div className="prose lg:prose-xl mt-5 dark:text-white">{children}</div>
    </Container>
  );
}