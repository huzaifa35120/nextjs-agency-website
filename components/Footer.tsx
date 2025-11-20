// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="footer">
        <div className="container footer__inner">
          <p>© {new Date().getFullYear()} Target Bluprint. All rights reserved.</p>
          <p className="footer__note">
            Built with Next.js & React • Simple websites for small businesses.
          </p>
        </div>
      </footer>
    );
  }
  