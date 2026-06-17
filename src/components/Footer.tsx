export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(201,169,106,0.1)] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-14">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 opacity-80">
                <rect x="1" y="1" width="38" height="38" stroke="#C9A96A" strokeWidth="1.2"/>
                <text x="20" y="27" fontFamily="Georgia, serif" fontSize="20" fontWeight="400" textAnchor="middle" fill="#C9A96A">R</text>
              </svg>
              <span className="font-display text-xl tracking-[0.22em] uppercase text-[#F2EDE4] font-light">
                RENCO
              </span>
            </div>
            <p className="font-body text-sm text-[#9A9388] leading-relaxed max-w-xs mb-5">
              Quality. Trust. Care. — Premium bathroom and home remodeling in Gig Harbor &amp; greater Seattle.
            </p>
            <p className="font-display text-sm italic text-[#6B6560]">
              &ldquo;Whatever you do, work at it with all your heart.&rdquo;
            </p>
            <p className="font-body text-xs tracking-widest uppercase text-[#3a3530] mt-1">
              Colossians 3:17
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A96A] mb-5">Services</h4>
            <ul className="space-y-3">
              <li><a href="/bathroom-remodel-gig-harbor" className="font-body text-sm text-[#9A9388] hover:text-[#C9A96A] transition-colors">Bathroom Remodel</a></li>
              <li><a href="/kitchen-remodel-seattle" className="font-body text-sm text-[#9A9388] hover:text-[#C9A96A] transition-colors">Kitchen Remodel</a></li>
              <li><a href="/exterior-remodel-gig-harbor" className="font-body text-sm text-[#9A9388] hover:text-[#C9A96A] transition-colors">Exterior Remodel</a></li>
              <li><a href="/full-home-renovation-seattle" className="font-body text-sm text-[#9A9388] hover:text-[#C9A96A] transition-colors">Full-Home Renovation</a></li>
              <li><a href="/blog" className="font-body text-sm text-[#9A9388] hover:text-[#C9A96A] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A96A] mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+12533892606" className="font-body text-sm text-[#9A9388] hover:text-[#C9A96A] transition-colors">
                  253-389-2606
                </a>
              </li>
              <li>
                <a href="mailto:david@renco.co" className="font-body text-sm text-[#9A9388] hover:text-[#C9A96A] transition-colors">
                  david@renco.co
                </a>
              </li>
              <li>
                <span className="font-body text-sm text-[#6B6560]">Gig Harbor &amp; Greater Seattle</span>
              </li>
              <li>
                <span className="font-body text-sm text-[#6B6560]">King &amp; Pierce County, WA</span>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.google.com/maps/place/RENCO+LLC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[rgba(201,169,106,0.2)] flex items-center justify-center text-[#6B6560] hover:text-[#C9A96A] hover:border-[#C9A96A] transition-all"
                aria-label="Google"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/rencollc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[rgba(201,169,106,0.2)] flex items-center justify-center text-[#6B6560] hover:text-[#C9A96A] hover:border-[#C9A96A] transition-all"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/rencollc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[rgba(201,169,106,0.2)] flex items-center justify-center text-[#6B6560] hover:text-[#C9A96A] hover:border-[#C9A96A] transition-all"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(201,169,106,0.08)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="font-body text-xs text-[#3a3530]">
            © {year} RENCO LLC. All rights reserved.
          </div>
          <div className="font-body text-xs text-[#3a3530] tracking-wider">
            License # RENCOL*803BM · Gig Harbor, WA
          </div>
        </div>
      </div>
    </footer>
  );
}
