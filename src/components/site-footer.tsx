import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-dark-panel text-dark-panel-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl font-bold">
            juice<span className="text-primary">bar.</span>
          </div>
          <p className="mt-3 text-sm text-dark-panel-foreground/70">
            Cold-pressed juices made with real ingredients. Nothing added, nothing artificial.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-dark-panel-foreground/70">
            <li><Link to="/menu">All juices</Link></li>
            <li><Link to="/menu">Cleanses</Link></li>
            <li><Link to="/menu">Wellness shots</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-dark-panel-foreground/70">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/benefits">Benefits</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Stay fresh</h4>
          <p className="mt-3 text-sm text-dark-panel-foreground/70">
            Get 10% off your first order.
          </p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm placeholder:text-dark-panel-foreground/40 outline-none focus:bg-white/15"
            />
            <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-dark-panel-foreground/50 sm:px-8">
        © {new Date().getFullYear()} JuiceBar. All rights reserved.
      </div>
    </footer>
  );
}
