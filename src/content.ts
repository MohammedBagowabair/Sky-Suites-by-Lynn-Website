export const BIZ = {
  name: 'Sky Suites by Lynn',
  phone: '+60 11-6068 2399', tel: '+601160682399', wa: '601160682399',
  address: '18, Jalan P. Ramlee, 50250 Kuala Lumpur',
  maps: 'https://www.google.com/maps/place/Sky+Suites+by+Lynn/@3.1566564,101.7092116,17z',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=3.1566564,101.7092116',
  osm: 'https://www.openstreetmap.org/?mlat=3.1566564&mlon=101.7092116#map=17/3.1566564/101.7092116',
  google: '4.3', googleCount: '2,062',
  credits: {
    hero: 'https://commons.wikimedia.org/wiki/File:Petronas_Towers_at_night,_Kuala_Lumpur,_20250818_1954_1607.jpg',
    ramlee: 'https://commons.wikimedia.org/wiki/File:Jalan_P._Ramlee,_Kuala_Lumpur_(2).jpg',
    suria: 'https://commons.wikimedia.org/wiki/File:Jalan_P._Ramlee,_Kuala_Lumpur_20260805_(6).jpg',
    park: 'https://commons.wikimedia.org/wiki/File:KLCC_Park_Kuala_Lumpur.jpg',
  },
}

const en = {
  meta: { title: 'Sky Suites by Lynn | Serviced suites on Jalan P. Ramlee, KLCC', desc: 'Serviced suites at 18 Jalan P. Ramlee, a 6-minute walk from the Petronas Twin Towers and 500 m from Suria KLCC. 3-bedroom city-view suite with kitchenette and washer. WhatsApp +60 11-6068 2399.' },
  langLabel: 'BM', langAria: 'BM · Tukar ke Bahasa Melayu',
  a11y: { skip: 'Skip to content', main: 'Main', mobile: 'Menu', menuOpen: 'Open menu', menuClose: 'Close menu', bar: 'Quick contact', pin: 'Sky Suites by Lynn location' },
  nav: [['suite', 'The suite'], ['address', 'Address'], ['book', 'Book'], ['faq', 'FAQ']] as [string, string][],
  cta: 'WhatsApp', call: 'Call', directions: 'Directions', bookBar: 'Book',
  hero: {
    kicker: 'Jalan P. Ramlee · KLCC',
    h1a: 'Sleep six minutes', h1b: 'from the Twin Towers.',
    sub: 'Sky Suites by Lynn runs serviced suites at 18 Jalan P. Ramlee, in the KLCC district. Walk to the Petronas Towers, Suria KLCC and KLCC Park; take the LRT or monorail for the rest of the city.',
    cta: 'Check availability', cta2: 'WhatsApp the team',
    stats: [['6 min', 'walk to the Petronas Towers'], ['500 m', 'to Suria KLCC'], ['3 BR', 'suite, sleeps a group']] as [string, string][],
    photo: 'Petronas Twin Towers at night', credit: 'Photo: Jakub Hałun / Wikimedia Commons, CC BY 4.0',
  },
  suite: {
    kicker: 'The suite', name: 'Dawn Legacy Suite',
    sub: 'A three-bedroom suite for families and friends travelling together, with room to cook and do laundry on longer stays.',
    spec: [['Bedrooms', '3'], ['Bathrooms', '2'], ['Size', '700 ft²'], ['View', 'City']] as [string, string][],
    has: ['Kitchenette', 'Washing machine', 'Free Wi-Fi', 'Air-conditioning', 'On-site parking'],
    illus: 'Illustrative photo, not the actual suite',
    ask: 'Ask for photos & rates',
    other: 'Travelling as a couple or a smaller group? Ask which suites are free for your dates.',
  },
  address: {
    kicker: 'The address', title: 'Jalan P. Ramlee, the KLCC side of the city',
    sub: 'The building sits on Jalan P. Ramlee between the Petronas Towers and the Bukit Nanas forest. Most of what visitors come to KLCC for is a short walk away.',
    places: [
      { img: 'ramlee', name: 'Jalan P. Ramlee', note: 'Your street', credit: 'Photo: BujangLapok05 / Wikimedia Commons, public domain', href: 'ramlee' },
      { img: 'suria', name: 'Suria KLCC', note: '500 m', credit: 'Photo: Kluang 2026 / Wikimedia Commons, public domain', href: 'suria' },
      { img: 'klccpark', name: 'KLCC Park', note: 'Short walk', credit: 'Photo: Philip Nalangan / Wikimedia Commons, CC BY 4.0', href: 'park' },
    ],
    transitTitle: 'Getting around', transit: [['KLCC LRT station', 'Kelana Jaya line'], ['Bukit Nanas monorail', 'KL Monorail line'], ['Petronas Twin Towers', '6 min walk']] as [string, string][],
  },
  rating: {
    title: 'Rated by thousands of guests',
    sub: 'Read recent reviews on Google before you book, and message the team with any questions about the unit, check-in or building access.',
    google: 'reviews on Google', read: 'Read the reviews on Google Maps',
  },
  book: {
    kicker: 'Book direct', title: 'Tell us your dates',
    sub: 'Choose dates and guests and we’ll write the WhatsApp message. The team replies with what’s available and the rate.',
    address: 'Address', phone: 'WhatsApp & phone', maps: 'Open in Google Maps',
    mapAlt: 'Street map of the KLCC area with Jalan P. Ramlee marked', mapCredit: 'Map © OpenStreetMap contributors',
  },
  enquiry: {
    title: 'Check availability', checkin: 'Check-in', checkout: 'Check-out', guests: 'Guests', unit: 'Suite', anyUnit: 'Any suite', send: 'Send on WhatsApp', hint: 'This only opens WhatsApp with your message. Nothing is booked until the team confirms.', preview: 'Message', minus: 'Fewer guests', plus: 'More guests', fmt: 'en-GB',
    nights: (n: number) => `${n} night${n > 1 ? 's' : ''}`,
    msg: (o: { ci: string; co: string; g: number; u: string; n: number }) => `Hi Sky Suites by Lynn, I'm looking for a suite on Jalan P. Ramlee.\nCheck-in: ${o.ci || 'flexible'}\nCheck-out: ${o.co || 'flexible'}${o.n ? ` (${o.n} night${o.n > 1 ? 's' : ''})` : ''}\nGuests: ${o.g}\nSuite: ${o.u}\nIs it available, and what is the rate? Thank you!`,
  },
  faq: {
    title: 'Questions',
    items: [
      ['How far is it to the Petronas Twin Towers?', 'About a 6-minute walk. Suria KLCC is around 500 m away.'],
      ['Which building facilities can guests use?', 'Access to building facilities can differ by unit and stay. Please confirm with the team on WhatsApp before you book.'],
      ['How does check-in work?', 'Send your arrival time on WhatsApp and the team will confirm your check-in details.'],
      ['Is there parking?', 'On-site parking is listed for the suite. Ask the team to confirm for your dates.'],
    ] as [string, string][],
  },
  footer: { explore: 'Explore', reach: 'Contact', photos: 'Street and city photos via Wikimedia Commons (Jakub Hałun, CC BY 4.0; Philip Nalangan, CC BY 4.0; BujangLapok05 and Kluang 2026, public domain). Suite photos are illustrative stock images (Unsplash), not the actual units.', pitch: 'Website concept prepared for this business. Not an official site yet — open to making it yours.', pitchLink: 'Contact the designer', rights: 'All rights reserved.', toTop: 'Back to top' },
}
export type Content = typeof en

const ms: Content = {
  meta: { title: 'Sky Suites by Lynn | Suite servis di Jalan P. Ramlee, KLCC', desc: 'Suite servis di 18 Jalan P. Ramlee, 6 minit berjalan kaki ke Menara Berkembar Petronas dan 500 m ke Suria KLCC. Suite 3 bilik tidur dengan pemandangan bandar, dapur kecil dan mesin basuh. WhatsApp +60 11-6068 2399.' },
  langLabel: 'EN', langAria: 'EN · Switch to English',
  a11y: { skip: 'Langkau ke kandungan', main: 'Utama', mobile: 'Menu', menuOpen: 'Buka menu', menuClose: 'Tutup menu', bar: 'Hubungi pantas', pin: 'Lokasi Sky Suites by Lynn' },
  nav: [['suite', 'Suite'], ['address', 'Lokasi'], ['book', 'Tempah'], ['faq', 'Soalan']],
  cta: 'WhatsApp', call: 'Telefon', directions: 'Arah', bookBar: 'Tempah',
  hero: {
    kicker: 'Jalan P. Ramlee · KLCC',
    h1a: 'Tidur enam minit', h1b: 'dari Menara Berkembar.',
    sub: 'Sky Suites by Lynn menguruskan suite servis di 18 Jalan P. Ramlee, dalam kawasan KLCC. Berjalan kaki ke Menara Petronas, Suria KLCC dan Taman KLCC; naik LRT atau monorel ke seluruh bandar.',
    cta: 'Semak kekosongan', cta2: 'WhatsApp pasukan kami',
    stats: [['6 min', 'berjalan kaki ke Menara Petronas'], ['500 m', 'ke Suria KLCC'], ['3 bilik', 'suite untuk berkumpulan']],
    photo: 'Menara Berkembar Petronas pada waktu malam', credit: 'Foto: Jakub Hałun / Wikimedia Commons, CC BY 4.0',
  },
  suite: {
    kicker: 'Suite', name: 'Dawn Legacy Suite',
    sub: 'Suite tiga bilik tidur untuk keluarga dan rakan yang melancong bersama, dengan ruang untuk memasak dan membasuh pakaian bagi penginapan lebih lama.',
    spec: [['Bilik tidur', '3'], ['Bilik air', '2'], ['Keluasan', '700 ft²'], ['Pemandangan', 'Bandar']],
    has: ['Dapur kecil', 'Mesin basuh', 'Wi-Fi percuma', 'Penyaman udara', 'Parkir di lokasi'],
    illus: 'Foto ilustrasi, bukan suite sebenar',
    ask: 'Minta foto & harga',
    other: 'Berdua atau dalam kumpulan kecil? Tanya suite mana yang kosong pada tarikh anda.',
  },
  address: {
    kicker: 'Lokasi', title: 'Jalan P. Ramlee, di sebelah KLCC',
    sub: 'Bangunan ini terletak di Jalan P. Ramlee, antara Menara Petronas dan hutan Bukit Nanas. Kebanyakan tarikan KLCC hanya sedikit langkah dari sini.',
    places: [
      { img: 'ramlee', name: 'Jalan P. Ramlee', note: 'Jalan anda', credit: 'Foto: BujangLapok05 / Wikimedia Commons, domain awam', href: 'ramlee' },
      { img: 'suria', name: 'Suria KLCC', note: '500 m', credit: 'Foto: Kluang 2026 / Wikimedia Commons, domain awam', href: 'suria' },
      { img: 'klccpark', name: 'Taman KLCC', note: 'Dekat', credit: 'Foto: Philip Nalangan / Wikimedia Commons, CC BY 4.0', href: 'park' },
    ],
    transitTitle: 'Bergerak di bandar', transit: [['Stesen LRT KLCC', 'Laluan Kelana Jaya'], ['Monorel Bukit Nanas', 'Laluan KL Monorail'], ['Menara Berkembar Petronas', '6 min berjalan kaki']],
  },
  rating: {
    title: 'Dinilai oleh ribuan tetamu',
    sub: 'Baca ulasan terkini di Google sebelum menempah, dan hantar sebarang soalan tentang unit, daftar masuk atau akses bangunan kepada pasukan kami.',
    google: 'ulasan di Google', read: 'Baca ulasan di Google Maps',
  },
  book: {
    kicker: 'Tempah terus', title: 'Beritahu kami tarikh anda',
    sub: 'Pilih tarikh dan bilangan tetamu, kami tuliskan mesej WhatsApp untuk anda. Pasukan kami akan membalas dengan suite yang ada dan harganya.',
    address: 'Alamat', phone: 'WhatsApp & telefon', maps: 'Buka di Google Maps',
    mapAlt: 'Peta jalan kawasan KLCC dengan Jalan P. Ramlee ditanda', mapCredit: 'Peta © penyumbang OpenStreetMap',
  },
  enquiry: {
    title: 'Semak kekosongan', checkin: 'Daftar masuk', checkout: 'Daftar keluar', guests: 'Tetamu', unit: 'Suite', anyUnit: 'Mana-mana suite', send: 'Hantar di WhatsApp', hint: 'Ini hanya membuka WhatsApp dengan mesej anda. Tiada tempahan dibuat sehingga pasukan kami mengesahkannya.', preview: 'Mesej', minus: 'Kurangkan tetamu', plus: 'Tambah tetamu', fmt: 'ms-MY',
    nights: (n: number) => `${n} malam`,
    msg: (o) => `Hai Sky Suites by Lynn, saya mencari suite di Jalan P. Ramlee.\nDaftar masuk: ${o.ci || 'fleksibel'}\nDaftar keluar: ${o.co || 'fleksibel'}${o.n ? ` (${o.n} malam)` : ''}\nTetamu: ${o.g}\nSuite: ${o.u}\nAdakah masih kosong, dan berapa harganya? Terima kasih!`,
  },
  faq: {
    title: 'Soalan lazim',
    items: [
      ['Berapa jauh ke Menara Berkembar Petronas?', 'Kira-kira 6 minit berjalan kaki. Suria KLCC pula sekitar 500 m.'],
      ['Kemudahan bangunan apa yang boleh digunakan tetamu?', 'Akses kepada kemudahan bangunan mungkin berbeza mengikut unit dan penginapan. Sila sahkan dengan pasukan kami di WhatsApp sebelum menempah.'],
      ['Bagaimana proses daftar masuk?', 'Hantar masa ketibaan anda di WhatsApp dan pasukan kami akan mengesahkan butiran daftar masuk anda.'],
      ['Adakah tempat letak kereta?', 'Parkir di lokasi disenaraikan untuk suite ini. Minta pasukan kami sahkan untuk tarikh anda.'],
    ],
  },
  footer: { explore: 'Laman', reach: 'Hubungi', photos: 'Foto jalan dan bandar melalui Wikimedia Commons (Jakub Hałun, CC BY 4.0; Philip Nalangan, CC BY 4.0; BujangLapok05 dan Kluang 2026, domain awam). Foto suite ialah imej stok ilustrasi (Unsplash), bukan unit sebenar.', pitch: 'Konsep laman web ini disediakan untuk perniagaan ini. Belum menjadi laman rasmi — boleh dijadikan milik anda.', pitchLink: 'Hubungi pereka', rights: 'Hak cipta terpelihara.', toTop: 'Kembali ke atas' },
}

export const content = { en, ms }
