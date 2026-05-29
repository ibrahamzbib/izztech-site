export default function Footer() {
  return (
    <footer className="border-t border-border-default/50 py-12 px-6 mt-12">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
        <div>
          &copy; {new Date().getFullYear()} IZZ Tech Inc.
        </div>
        <div className="flex gap-6">
          <a href="mailto:ibraham@izztech.io" className="hover:text-text-primary transition-colors">
            ibraham@izztech.io
          </a>
          <span>Palm City, FL</span>
        </div>
      </div>
    </footer>
  );
}
