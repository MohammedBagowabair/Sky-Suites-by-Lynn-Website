import { useCallback, useRef, useState } from 'react'
import { asset, useI18n } from './i18n'
import { useMenu } from './hooks'
import { BIZ, type Content } from './content'
import { Arrow, Check, Enquiry, Faq, Footer, Header, MapFigure, MobileBar, MobileMenu, PhoneIcon, Stars, WaIcon, waLink } from './ui'

function Brand({ small = false }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className={small ? 'h-9 w-9' : 'h-10 w-10'} aria-hidden><circle cx="20" cy="20" r="19" fill="none" stroke="rgb(var(--accent))" strokeWidth="1.5" /><path d="M14 31V12l3-3v22M23 31V12l3 3v16M17 19h6" fill="none" stroke="rgb(var(--accent))" strokeWidth="1.6" /></svg>
      <span className="leading-none"><span className="block font-display text-[21px] tracking-[0.01em]">Sky Suites</span><span className="mt-0.5 block font-display text-[13px] italic text-accentlt">by Lynn</span></span>
    </span>
  )
}

function Hero() {
  const { c } = useI18n<Content>()
  const H = c.hero
  return (
    <section id="top" className="on-deep relative isolate overflow-hidden bg-deep text-ondeep">
      <picture>
        <source media="(min-width: 1024px)" srcSet={asset('images/hero-1400.webp')} />
        <img src={asset('images/hero-m-480.webp')} srcSet={`${asset('images/hero-m-480.webp')} 480w, ${asset('images/hero-m-720.webp')} 720w`} sizes="100vw" width={720} height={900} alt={H.photo} fetchPriority="high" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-80" />
      </picture>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,rgb(var(--deep)/.25),rgb(var(--deep)/.85)_60%,rgb(var(--deep))_95%)]" aria-hidden />
      <div className="mx-auto flex min-h-[calc(100svh-56px)] max-w-[980px] flex-col items-center justify-end px-5 pb-10 pt-28 text-center sm:px-8 lg:min-h-[700px] lg:justify-center lg:pb-16">
        <p className="kicker text-accentlt"><span className="h-px w-8 bg-accent" aria-hidden />{H.kicker}<span className="h-px w-8 bg-accent" aria-hidden /></p>
        <h1 className="mt-5 font-display text-[clamp(2.7rem,11vw,6rem)] leading-[0.95] tracking-[-0.015em]">{H.h1a}<br /><em className="text-accent">{H.h1b}</em></h1>
        <p className="mt-6 max-w-[36rem] text-[16.5px] leading-relaxed text-ondeep/85">{H.sub}</p>
        <div className="mt-8 grid w-full gap-3 sm:flex sm:w-auto sm:justify-center">
          <a href="#book" className="tap inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-accent px-8 text-[16px] font-bold text-onaccent transition hover:brightness-105">{H.cta}<Arrow /></a>
          <a href={waLink(BIZ.wa, c.enquiry.msg({ ci: '', co: '', g: 2, u: c.enquiry.anyUnit, n: 0 }))} target="_blank" rel="noopener" className="tap inline-flex h-[54px] items-center justify-center gap-2 rounded-full border border-accent/60 px-7 text-[16px] font-semibold transition hover:bg-accent/10"><WaIcon className="h-[18px] w-[18px]" />{H.cta2}</a>
        </div>
        <dl className="mt-10 grid w-full max-w-[640px] grid-cols-3 border-t border-accent/30 pt-6">
          {H.stats.map(([n, l]) => <div key={l} className="flex min-w-0 flex-col-reverse px-1"><dt className="mt-1 break-words text-[12.5px] leading-snug text-ondeepm">{l}</dt><dd className="font-display text-[clamp(1.6rem,6vw,2.4rem)] leading-none text-accentlt">{n}</dd></div>)}
        </dl>
      </div>
      <p className="absolute bottom-1.5 right-3 text-[10.5px] text-ondeep/60"><a href={BIZ.credits.hero} target="_blank" rel="noopener" className="hover:underline">{H.credit}</a></p>
    </section>
  )
}

function Suite() {
  const { c } = useI18n<Content>()
  const S = c.suite
  return (
    <section id="suite" className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-5 gap-3">
            <figure className="relative col-span-3"><img src={asset('images/il-bed-640.webp')} srcSet={`${asset('images/il-bed-640.webp')} 640w, ${asset('images/il-bed-960.webp')} 960w`} sizes="(min-width:1024px) 340px, 56vw" width={960} height={640} loading="lazy" decoding="async" alt="" className="aspect-[3/4] w-full rounded-t-full object-cover" /></figure>
            <figure className="col-span-2 self-end"><img src={asset('images/il-bath-640.webp')} srcSet={`${asset('images/il-bath-640.webp')} 640w, ${asset('images/il-bath-960.webp')} 960w`} sizes="(min-width:1024px) 230px, 38vw" width={960} height={640} loading="lazy" decoding="async" alt="" className="aspect-[3/5] w-full rounded-t-full object-cover" /></figure>
          </div>
          <p className="mt-3 text-[12px] text-muted">{S.illus}</p>
        </div>
        <div className="lg:col-span-6">
          <p className="kicker text-accentink">{S.kicker}</p>
          <h2 className="h2 mt-3">{S.name}</h2>
          <p className="mt-4 max-w-lg text-[16.5px] leading-relaxed text-muted">{S.sub}</p>
          <dl className="mt-8 grid grid-cols-2 gap-y-1 border-y border-ink/15 sm:grid-cols-4">
            {S.spec.map(([k, v]) => <div key={k} className="flex min-w-0 flex-col-reverse py-4 pr-2 sm:border-r sm:border-ink/10 sm:last:border-r-0 sm:[&:not(:first-child)]:pl-3"><dt className="mt-1 text-[12px] uppercase tracking-[0.12em] text-muted">{k}</dt><dd className="font-display text-[clamp(1.5rem,5.5vw,2.2rem)] leading-none">{v}</dd></div>)}
          </dl>
          <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-2.5">{S.has.map((h) => <li key={h} className="flex gap-2.5 text-[15.5px]"><Check className="mt-1 h-4 w-4 shrink-0 text-accentink" />{h}</li>)}</ul>
          <a href={waLink(BIZ.wa, c.enquiry.msg({ ci: '', co: '', g: 4, u: S.name, n: 0 }))} target="_blank" rel="noopener" className="tap mt-8 inline-flex h-[52px] items-center gap-2 rounded-full bg-deep px-7 text-[15.5px] font-semibold text-ondeep"><WaIcon className="h-4 w-4" />{S.ask}</a>
          <p className="mt-4 text-[14.5px] text-muted">{S.other}</p>
        </div>
      </div>
    </section>
  )
}

function Address() {
  const { c } = useI18n<Content>()
  const A = c.address
  return (
    <section id="address" className="bg-soft">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker text-accentink">{A.kicker}</p>
          <h2 className="h2 mt-3">{A.title}</h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-muted">{A.sub}</p>
        </div>
        <div className="rail -mx-5 mt-10 flex gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0" tabIndex={0} role="region" aria-label={A.title}>
          {A.places.map((p) => (
            <figure key={p.name} className="w-[72%] shrink-0 md:w-auto">
              <img src={asset(`images/${p.img}-640.webp`)} srcSet={`${asset(`images/${p.img}-640.webp`)} 640w, ${asset(`images/${p.img}-960.webp`)} 960w`} sizes="(min-width:768px) 360px, 72vw" width={960} height={1200} loading="lazy" decoding="async" alt={p.name} className="aspect-[4/5] w-full rounded-t-full object-cover" />
              <div className="mt-4"><span className="block text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accentink">{p.note}</span><span className="block font-display text-[24px]">{p.name}</span></div>
              <figcaption className="mt-1 text-[11.5px] text-muted"><a href={BIZ.credits[p.href as keyof typeof BIZ.credits]} target="_blank" rel="noopener" className="hover:underline">{p.credit}</a></figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {A.transit.map(([k, v]) => <div key={k} className="rounded-2xl bg-paper p-5"><p className="font-display text-[21px]">{k}</p><p className="mt-1 text-[14.5px] text-muted">{v}</p></div>)}
        </div>
      </div>
    </section>
  )
}

function Rating() {
  const { c } = useI18n<Content>()
  const R = c.rating
  return (
    <section className="on-deep bg-deep text-ondeep">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:items-center lg:py-20">
        <div className="flex items-center gap-5 lg:col-span-5">
          <span className="font-display text-[84px] leading-none text-accent">{BIZ.google}</span>
          <span><Stars value={4.3} className="h-5 w-5" /><span className="mt-1 block text-[15px] text-ondeepm">{BIZ.googleCount} {R.google}</span></span>
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] leading-tight">{R.title}</h2>
          <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-ondeep/80">{R.sub}</p>
          <a href={BIZ.maps} target="_blank" rel="noopener" className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-semibold text-accentlt underline underline-offset-4">{R.read}<Arrow /></a>
        </div>
      </div>
    </section>
  )
}

function Book() {
  const { c } = useI18n<Content>()
  const B = c.book
  return (
    <section id="book" className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="kicker text-accentink">{B.kicker}</p>
          <h2 className="h2 mt-3">{B.title}</h2>
          <p className="mt-4 max-w-md text-[16.5px] leading-relaxed text-muted">{B.sub}</p>
          <dl className="mt-8 grid gap-6">
            <div><dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accentink">{B.phone}</dt><dd className="mt-1.5"><a href={`tel:${BIZ.tel}`} className="font-display text-[32px]">{BIZ.phone}</a></dd></div>
            <div><dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accentink">{B.address}</dt><dd className="mt-1.5 text-[16.5px] leading-relaxed">{BIZ.address}<br /><a href={BIZ.maps} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center font-semibold text-accentink underline underline-offset-4">{B.maps}</a></dd></div>
          </dl>
        </div>
        <div className="grid gap-8 lg:col-span-7">
          <div className="rounded-[24px] border border-ink/10 bg-white/70"><Enquiry t={c.enquiry} units={[c.suite.name]} wa={BIZ.wa} maxGuests={8} /></div>
          <MapFigure href={BIZ.directions} alt={B.mapAlt} pin={c.a11y.pin} credit={B.mapCredit} cta={c.directions} osm={BIZ.osm} img={asset} />
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const { c } = useI18n<Content>()
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)
  const close = useCallback(() => setOpen(false), [])
  useMenu(open, close, btnRef)
  const waHi = waLink(BIZ.wa, c.enquiry.msg({ ci: '', co: '', g: 2, u: c.enquiry.anyUnit, n: 0 }))
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-onaccent">{c.a11y.skip}</a>
      <Header brand={<Brand />} nav={c.nav} langLabel={c.langLabel} langAria={c.langAria} cta={c.cta} ctaHref={waHi} menuOpen={open} onMenu={() => setOpen((o) => !o)} btnRef={btnRef} a11y={{ main: c.a11y.main, menuOpen: c.a11y.menuOpen, menuClose: c.a11y.menuClose }} />
      {open && (
        <MobileMenu nav={c.nav} close={close} label={c.a11y.mobile}>
          <a href="#book" onClick={close} className="tap inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-accent font-bold text-onaccent">{c.hero.cta}<Arrow /></a>
          <div className="grid grid-cols-2 gap-3">
            <a href={waHi} target="_blank" rel="noopener" className="tap inline-flex items-center justify-center gap-2 rounded-full border border-ondeep/25 font-semibold"><WaIcon className="h-4 w-4" />WhatsApp</a>
            <a href={`tel:${BIZ.tel}`} className="tap inline-flex items-center justify-center gap-2 rounded-full border border-ondeep/25 font-semibold"><PhoneIcon className="h-4 w-4" />{c.call}</a>
          </div>
        </MobileMenu>
      )}
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Suite />
        <Address />
        <Rating />
        <Book />
        <section id="faq" className="bg-soft">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
            <h2 className="h2 lg:col-span-4">{c.faq.title}</h2>
            <Faq items={c.faq.items} className="lg:col-span-8" />
          </div>
        </section>
      </main>
      <Footer brand={<Brand small />} name={BIZ.name} address={BIZ.address} mapsHref={BIZ.maps} mapsLabel={c.book.maps} nav={c.nav} t={c.footer}
        reach={<ul><li><a href={`tel:${BIZ.tel}`} className="inline-flex min-h-[40px] items-center hover:text-accentlt">{BIZ.phone}</a></li><li><a href={waHi} target="_blank" rel="noopener" className="inline-flex min-h-[40px] items-center gap-2 hover:text-accentlt"><WaIcon className="h-4 w-4" />WhatsApp</a></li></ul>} />
      <MobileBar label={c.a11y.bar} items={[{ href: '#book', label: c.bookBar, icon: 'wa', primary: true }, { href: `tel:${BIZ.tel}`, label: c.call, icon: 'phone' }, { href: BIZ.directions, label: c.directions, icon: 'pin', ext: true }]} />
    </>
  )
}
