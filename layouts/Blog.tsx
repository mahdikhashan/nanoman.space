import Container from '@/ui/Container';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="prose lg:prose-xl mt-5 dark:text-white">{children}</div>
    </Container>
  );
}
