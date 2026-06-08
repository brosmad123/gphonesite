import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6 text-sm">
            <Link to="/specs" className="text-primary hover:underline">Specs</Link>
            <Link to="/privacy" className="text-primary hover:underline">Privacy</Link>
            <Link to="/terms" className="text-primary hover:underline">Terms</Link>
          </div>
          <a
            href="mailto:861814@pdsb.net"
            className="text-primary text-sm hover:underline"
          >
            861814@pdsb.net
          </a>
        </div>
        <div className="text-xs text-muted-foreground text-center space-y-1">
          <p>Copyright &copy; 2026 The GG Company. All rights reserved.</p>
          <p>GAIA features require gOS 2.1.0 or later. Offer ends June 10th, 2026. 30-day money-back guarantee.</p>
        </div>
      </div>
    </footer>
  );
}