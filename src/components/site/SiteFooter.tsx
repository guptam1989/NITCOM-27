import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-deep text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-semibold">NITCOM-2027</h3>
          <p className="mt-3 text-sm text-navy-foreground/75">
            International Conference on Next-Gen Intelligent Technologies in Computing and
            Communication, hosted by the Department of Computer Science &amp; Engineering, Dr B R
            Ambedkar National Institute of Technology Jalandhar
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Address</h4>
          <p className="mt-3 flex gap-2 text-sm text-navy-foreground/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>
              Dr B R Ambedkar National Institute of Technology
              <br />
              N.I.T. Post Office, Jalandhar (Punjab) - 144 027
            </span>
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/75">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <a className="hover:text-navy-foreground" href="mailto:guptam@nitj.ac.in">
                guptam@nitj.ac.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              +919679700950
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              +918077878475
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              +918637511985
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-navy-foreground/60">
          <p>{"\u00A9"} 2027 NITCOM, NIT Jalandhar. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/call-for-papers" className="hover:text-navy-foreground">
              Call for Papers
            </Link>
            <Link to="/registration" className="hover:text-navy-foreground">
              Registration
            </Link>
            <Link to="/contact" className="hover:text-navy-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

