// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-4xl px-4 py-12 space-y-12">
        {/* ÜST KISIM – BAŞLIK + KISA TANIM */}
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Kişisel Web Sitesi
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            Elif Buse Köprücü
          </h1>
          <p className="max-w-xl text-sm leading-6 text-zinc-400">
            Yazılım Mühendisliği öğrencisi 👩‍💻
          </p>
        </header>

        {/* KÜÇÜK NAVİGASYON */}
        <nav className="flex flex-wrap gap-3 text-sm">
          <a
            href="#hakkimda"
            className="rounded-full border border-zinc-800 px-4 py-1.5 text-zinc-300 hover:border-zinc-500 hover:text-zinc-50"
          >
            Hakkımda
          </a>
          <a
            href="#projeler"
            className="rounded-full border border-zinc-800 px-4 py-1.5 text-zinc-300 hover:border-zinc-500 hover:text-zinc-50"
          >
            Projeler
          </a>
          <a
            href="#notlar"
            className="rounded-full border border-zinc-800 px-4 py-1.5 text-zinc-300 hover:border-zinc-500 hover:text-zinc-50"
          >
            Notlar
          </a>
          <a
            href="#iletisim"
            className="rounded-full border border-zinc-800 px-4 py-1.5 text-zinc-300 hover:border-zinc-500 hover:text-zinc-50"
          >
            İletişim
          </a>
        </nav>

        {/* HAKKIMDA — SENİN BİLGİLERİNLE DOLDURULDU */}
        <section
          id="hakkimda"
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-3"
        >
          <h2 className="text-xl font-semibold">Hakkımda</h2>
          <p className="text-sm text-zinc-400 leading-6">
            Merhaba, ben Elif Buse. Fırat Üniversitesi Yazılım Mühendisliği 4.
            sınıf öğrencisiyim. Özellikle web programlama ile ilgileniyorum;
            frontend tarafında React ve Next.js, backend tarafında ise Laravel
            ve PHP üzerine kendimi geliştirmeye çalışıyorum.
          </p>
          <p className="text-sm text-zinc-400 leading-6">
            Bu siteyi; projelerimi, öğrendiğim teknolojileri ve zaman içinde
            aldığım notları toparlamak için kullanacağım. Şu an hâlâ taslak
            aşamasında, ama yavaş yavaş gerçek içeriklerle dolduracağım.
          </p>
        </section>

        {/* PROJELER — ŞİMDİLİK TASLAK */}
        <section
          id="projeler"
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4"
        >
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="text-xl font-semibold">Projeler</h2>
            <span className="text-xs text-zinc-500">
              
            </span>
          </div>

          <p className="text-sm text-zinc-400">
           
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 space-y-2">
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Örnek Proje
              </p>
              <h3 className="text-sm font-medium">Proje Adı</h3>
              <p className="text-xs text-zinc-500">
                Buraya projenin ne yaptığını, hangi teknolojileri kullandığını
                kısaca yazacaksın.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 space-y-2">
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Örnek Proje
              </p>
              <h3 className="text-sm font-medium">Proje Adı</h3>
              <p className="text-xs text-zinc-500">
                Zamanla buradaki örnek kartları gerçek projelerinle
                değiştireceksin.
              </p>
            </div>
          </div>
        </section>

        {/* NOTLAR — ŞİMDİLİK BOŞ ALAN */}
        <section
          id="notlar"
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-3"
        >
          <h2 className="text-xl font-semibold">Notlar</h2>
          <p className="text-sm text-zinc-400 leading-6">
            Örneğin; “Vercel’e deploy adımları”, “Laravel’de karşılaştığım
            bir hatanın çözümü” gibi mini yazılar ekleyebilirsin.
          </p>
          <div className="mt-2 rounded-xl border border-dashed border-zinc-700 px-4 py-6 text-center text-xs text-zinc-500">
            Şu an için not eklenmedi.
          </div>
        </section>

        {/* İLETİŞİM — KISMEN DOLDURULDU */}
        <section
          id="iletisim"
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-3 mb-8"
        >
          <h2 className="text-xl font-semibold">İletişim</h2>
          <p className="text-sm text-zinc-400">
            Aşağıdaki kanallar üzerinden benimle iletişime geçebilirsin. 
          </p>

          <ul className="mt-2 space-y-1 text-sm text-zinc-300">
            {/* BURAYA KENDİ GERÇEK E-POSTANI YAZ */}
            <li>
              <span className="text-zinc-500">E-posta: </span>
              <a
                href="mailto:ornek@mail.com"
                className="hover:underline"
              >
               buselif.kprc@gmail.com
              </a>
            </li>
            <li>
              <span className="text-zinc-500">GitHub: </span>
              <a
                href="https://github.com/buselifkprc"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                github.com/buselifkprc
              </a>
            </li>
            <li>
              <span className="text-zinc-500">LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/ebkprc/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                 linkedin.com/ebkprc
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
