export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
              📞 Kontakt
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Robert — Twój doradca klimatyzacji</li>
              <li>
                <a href="tel:+48788304845" className="font-bold text-white hover:text-sky-400">
                  788 304 845
                </a>
              </li>
              <li>📧 kontakt@czasklimy.pl</li>
              <li>🌐 www.CzasKlimy.pl</li>
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
              📍 Obszar działania
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Białołęka, Targówek, Praga</li>
              <li>Marki, Ząbki, Zielonka, Wołomin</li>
              <li>Jabłonna, Łomianki, Legionowo</li>
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
              🏆 Autoryzowany montaż
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Mitsubishi Electric • LG • Gree • Haier</li>
              <li>Rotenso • Kaisai • AUX</li>
              <li>✅ F-GAZ • SEP</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/50 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} CzasKlimy.pl |{" "}
              <a href="#/polityka-prywatnosci" className="hover:text-white">
                Polityka prywatności
              </a>{" "}
              |{" "}
              <a href="#/regulamin" className="hover:text-white">
                Regulamin
              </a>
            </p>
          </div>
          <p className="mt-3 text-[11px] text-white/30">
            Usługi montażowe wykonuje firma posiadająca uprawnienia F-GAZ i SEP.
            Robogaz spółka z o.o.
          </p>
        </div>
      </div>
    </footer>
  );
}
