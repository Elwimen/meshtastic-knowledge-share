const MESHTASTIC_LANG = {
  page_title: {
    en: "Meshtastic \u2014 Off-Grid Communication via LoRa Mesh",
    hr: "Meshtastic \u2014 Komunikacija izvan mre\u017ee putem LoRa Mesh-a"
  },

  // Slide 1
  slide1_subtitle: {
    en: "Off-Grid Communication via LoRa Mesh Networks",
    hr: "Komunikacija izvan mre\u017ee putem LoRa Mesh mre\u017ea"
  },
  slide1_event: {
    en: "EPAM Knowledge Sharing &middot; 2026",
    hr: "EPAM Dijeljenje znanja &middot; 2026."
  },

  // Slide 2
  slide2_heading: { en: "Agenda", hr: "Dnevni red" },
  slide2_col1_heading: { en: "Overview", hr: "Pregled" },
  slide2_col2_heading: { en: "Firmware Deep Dive", hr: "Firmware \u2014 dubinski pregled" },
  slide2_fw1: { en: "Firmware architecture \u2014 intro", hr: "Arhitektura firmwarea \u2014 uvod" },
  slide2_fw2: { en: "Codebase map", hr: "Karta koda" },
  slide2_fw3: { en: "Build system &amp; hardware variants", hr: "Build sustav i varijante hardvera" },
  slide2_fw4: { en: "Startup &amp; init sequence", hr: "Redoslijed pokretanja i inicijalizacije" },
  slide2_fw5: { en: "Router hierarchy", hr: "Hijerarhija usmjeriva\u010da" },
  slide2_fw6: { en: "Module / plugin system", hr: "Modul / plugin sustav" },
  slide2_fw7: { en: "Platform HAL", hr: "Platformski HAL" },
  slide2_fw8: { en: "Key data structures", hr: "Klju\u010dne strukture podataka" },
  slide2_fw9: { en: "Where to start", hr: "Gdje po\u010deti" },
  slide2_item1: {
    en: "The Problem &mdash; why off-grid communication matters",
    hr: "Problem &mdash; za\u0161to je komunikacija izvan mre\u017ee va\u017ena"
  },
  slide2_item2: { en: "What is Meshtastic?", hr: "\u0160to je Meshtastic?" },
  slide2_item3: { en: "LoRa Technology primer", hr: "Uvod u LoRa tehnologiju" },
  slide2_item4: { en: "How mesh networking works", hr: "Kako funkcionira mesh mre\u017ea" },
  slide2_item5: { en: "Protocol architecture &amp; routing", hr: "Arhitektura protokola i usmjeravanje" },
  slide2_item6: { en: "Encryption &amp; security", hr: "Enkripcija i sigurnost" },
  slide2_item7: { en: "Hardware ecosystem", hr: "Hardverski ekosustav" },
  slide2_item8: {
    en: "Software ecosystem &mdash; firmware, apps, web",
    hr: "Softverski ekosustav &mdash; firmware, aplikacije, web"
  },
  slide2_item9: { en: "Use cases &amp; range records", hr: "Primjene i rekordi dosega" },
  slide2_item10: { en: "Getting started &amp; resources", hr: "Kako po\u010deti i resursi" },

  // Slide 3
  slide3_heading: { en: "The Problem", hr: "Problem" },
  slide3_quote: {
    en: "What happens when cellular towers go down, the internet is unreachable, or you\u2019re simply off the grid?",
    hr: "\u0160to se doga\u0111a kada mobilni tornjevi prestanu raditi, internet je nedostupan ili ste jednostavno izvan dosega mre\u017ee?"
  },
  slide3_col1_heading: { en: "Scenarios", hr: "Scenariji" },
  slide3_scenario1: { en: "Natural disasters (floods, earthquakes)", hr: "Prirodne katastrofe (poplave, potresi)" },
  slide3_scenario2: { en: "Remote hiking / mountaineering", hr: "Udaljeni planinski pohodi" },
  slide3_scenario3: { en: "Rural areas with no coverage", hr: "Ruralna podru\u010dja bez pokrivenosti" },
  slide3_scenario4: { en: "Events with overloaded networks", hr: "Doga\u0111aji s preoptere\u0107enim mre\u017eama" },
  slide3_scenario5: { en: "War zones &amp; conflict areas", hr: "Ratne zone i konfliktna podru\u010dja" },
  slide3_col2_heading: { en: "Requirements", hr: "Zahtjevi" },
  slide3_req1: { en: "No infrastructure dependency", hr: "Bez ovisnosti o infrastrukturi" },
  slide3_req2: { en: "Long range", hr: "Veliki domet" },
  slide3_req3: { en: "Low power / long battery life", hr: "Niska potro\u0161nja / dugo trajanje baterije" },
  slide3_req4: { en: "Encrypted", hr: "Enkriptirano" },
  slide3_req5: { en: "Affordable", hr: "Pristupa\u010dna cijena" },

  // Slide 4
  slide4_heading: { en: "What is Meshtastic?", hr: "\u0160to je Meshtastic?" },
  slide4_item1: {
    en: '<span class="highlight">Open-source</span> project &mdash; 100% community-driven',
    hr: '<span class="highlight">Otvoreni kod</span> &mdash; 100% vo\u0111en zajednicom'
  },
  slide4_item2: {
    en: 'Turns <span class="highlight">inexpensive LoRa radios</span> (~$20-50) into a mesh network',
    hr: 'Pretvara <span class="highlight">jeftine LoRa radije</span> (~20-50 $) u mesh mre\u017eu'
  },
  slide4_item3: {
    en: 'Long-range, off-grid <span class="highlight">text messaging</span> &amp; <span class="highlight">GPS location sharing</span>',
    hr: 'Dugog dometa, izvan mre\u017ee: <span class="highlight">tekstualne poruke</span> i <span class="highlight">dijeljenje GPS lokacije</span>'
  },
  slide4_item4: { en: "No SIM card, no subscription, no internet required", hr: "Bez SIM kartice, bez pretplate, bez interneta" },
  slide4_item5: {
    en: "Decentralized &mdash; every node is a router",
    hr: "Decentralizirano &mdash; svaki \u010dvor je usmjeriva\u010d"
  },
  slide4_item6: { en: "End-to-end encrypted communication", hr: "End-to-end enkriptirana komunikacija" },
  slide4_item7: {
    en: 'Works with companion apps on <span class="highlight">Android, iOS, Web, and CLI</span>',
    hr: 'Radi s prate\u0107im aplikacijama na <span class="highlight">Androidu, iOS-u, Webu i CLI-ju</span>'
  },
  slide4_note: {
    en: "Project started in 2020 &mdash; active development with thousands of contributors",
    hr: "Projekt pokrenut 2020. &mdash; aktivni razvoj s tisu\u0107ama suradnika"
  },

  // Slide 5
  slide5_heading: { en: "LoRa Technology", hr: "LoRa tehnologija" },
  slide5_col1_heading: { en: "What is LoRa?", hr: "\u0160to je LoRa?" },
  slide5_lora1: {
    en: '<span class="highlight">Lo</span>ng <span class="highlight">Ra</span>nge radio modulation technique',
    hr: '<span class="highlight">Lo</span>ng <span class="highlight">Ra</span>nge &mdash; tehnika modulacije dugog dometa'
  },
  slide5_lora2: { en: "Developed by Semtech (patented chirp spread spectrum)", hr: "Razvio Semtech (patentirani chirp spread spectrum)" },
  slide5_lora3: { en: "Sub-GHz ISM bands (license-free)", hr: "Sub-GHz ISM pojasevi (bez licence)" },
  slide5_lora4: { en: "Extreme range vs. WiFi/Bluetooth", hr: "Ekstreman domet u usporedbi s WiFi/Bluetooth" },
  slide5_lora5: { en: "Very low power consumption", hr: "Vrlo niska potro\u0161nja energije" },
  slide5_lora6: {
    en: 'Trade-off: <span class="highlight">low data rate</span> (~0.3 &ndash; 22 kbps)',
    hr: 'Kompromis: <span class="highlight">niska brzina podataka</span> (~0,3 &ndash; 22 kbps)'
  },
  slide5_col2_heading: { en: "Key Parameters", hr: "Klju\u010dni parametri" },
  slide5_sf: {
    en: '<span class="highlight">Spreading Factor (SF)</span> &mdash; 7-12<br><span class="dim">Higher = longer range, slower speed</span>',
    hr: '<span class="highlight">Spreading Factor (SF)</span> &mdash; 7-12<br><span class="dim">Ve\u0107i = ve\u0107i domet, sporija brzina</span>'
  },
  slide5_bw: {
    en: '<span class="highlight">Bandwidth</span> &mdash; 125-500 kHz<br><span class="dim">Wider = faster but less range</span>',
    hr: '<span class="highlight">Bandwidth (BW)</span> &mdash; 125-500 kHz<br><span class="dim">\u0160iri = br\u017ee ali manji domet</span>'
  },
  slide5_cr: {
    en: '<span class="highlight">Coding Rate</span> &mdash; 4/5 to 4/8<br><span class="dim">Higher = more error correction</span>',
    hr: '<span class="highlight">Coding Rate (CR)</span> &mdash; 4/5 do 4/8<br><span class="dim">Ve\u0107i = vi\u0161e korekcije pogre\u0161aka</span>'
  },
  slide5_tx: {
    en: '<span class="highlight">TX Power</span> &mdash; up to +30 dBm<br><span class="dim">Region-dependent limits</span>',
    hr: '<span class="highlight">TX snaga</span> &mdash; do +30 dBm<br><span class="dim">Ovisi o regiji</span>'
  },

  // Slide 6
  slide6_heading: { en: "LoRa vs Other Wireless Technologies", hr: "LoRa naspram drugih be\u017ei\u010dnih tehnologija" },
  slide6_th_tech: { en: "Technology", hr: "Tehnologija" },
  slide6_th_range: { en: "Range", hr: "Domet" },
  slide6_th_data: { en: "Data Rate", hr: "Brzina" },
  slide6_th_power: { en: "Power", hr: "Potro\u0161nja" },
  slide6_th_infra: { en: "Infrastructure", hr: "Infrastruktura" },
  slide6_th_license: { en: "License", hr: "Licenca" },
  slide6_lora_power: { en: "Very Low", hr: "Vrlo niska" },
  slide6_lora_infra: { en: "None", hr: "Nema" },
  slide6_lora_license: { en: "ISM (free)", hr: "ISM (besplatno)" },
  slide6_wifi_power: { en: "High", hr: "Visoka" },
  slide6_wifi_infra: { en: "AP required", hr: "Potreban AP" },
  slide6_wifi_license: { en: "ISM (free)", hr: "ISM (besplatno)" },
  slide6_bt_power: { en: "Low", hr: "Niska" },
  slide6_bt_infra: { en: "None", hr: "Nema" },
  slide6_bt_license: { en: "ISM (free)", hr: "ISM (besplatno)" },
  slide6_cell_name: { en: "Cellular (4G)", hr: "Mobilna (4G)" },
  slide6_cell_power: { en: "Medium", hr: "Srednja" },
  slide6_cell_infra: { en: "Towers + SIM", hr: "Tornjevi + SIM" },
  slide6_cell_license: { en: "Licensed", hr: "Licencirana" },
  slide6_sat_name: { en: "Satellite", hr: "Satelit" },
  slide6_sat_range: { en: "Global", hr: "Globalni" },
  slide6_sat_data: { en: "Variable", hr: "Varijabilna" },
  slide6_sat_power: { en: "High", hr: "Visoka" },
  slide6_sat_infra: { en: "Constellation", hr: "Konstelacija" },
  slide6_sat_license: { en: "Licensed", hr: "Licencirana" },
  slide6_note: {
    en: "LoRa fills a unique niche: extreme range + zero infrastructure + license-free",
    hr: "LoRa popunjava jedinstvenu ni\u0161u: ekstreman domet + nula infrastrukture + bez licence"
  },

  // Slide 7
  slide7_heading: { en: "Frequency Bands by Region", hr: "Frekvencijski pojasevi po regijama" },
  slide7_th_region: { en: "Region", hr: "Regija" },
  slide7_th_freq: { en: "Frequency", hr: "Frekvencija" },
  slide7_th_power: { en: "Max TX Power", hr: "Maks. TX snaga" },
  slide7_th_notes: { en: "Notes", hr: "Napomene" },
  slide7_eu868_notes: { en: "Most popular EU band", hr: "Najpopularniji EU pojas" },
  slide7_eu433_notes: { en: "Lower power limit", hr: "Ni\u017ee ograni\u010denje snage" },
  slide7_na_name: { en: "North America", hr: "Sjeverna Amerika" },
  slide7_na_notes: { en: "104 frequency slots", hr: "104 frekv. utora" },
  slide7_au_name: { en: "Australia/NZ", hr: "Australija/NZ" },
  slide7_au_notes: { en: "Similar to US", hr: "Sli\u010dno SAD-u" },
  slide7_jp_notes: { en: "LBT required", hr: "Potreban LBT" },
  slide7_note: {
    en: "All ISM bands &mdash; no license required for Meshtastic operation",
    hr: "Svi ISM pojasevi &mdash; nije potrebna licenca za kori\u0161tenje Meshtastica"
  },

  // Slide 8
  slide8_heading: { en: "How Mesh Networking Works", hr: "Kako funkcionira mesh mre\u017ea" },
  slide8_bullet1: { en: "Every node rebroadcasts messages it hasn\u2019t seen before", hr: "Svaki \u010dvor ponovno emitira poruke koje jo\u0161 nije vidio" },
  slide8_bullet2: {
    en: '<span class="highlight">Hop limit</span> decrements at each relay &mdash; prevents infinite loops',
    hr: '<span class="highlight">Ograni\u010denje skokova</span> se smanjuje pri svakom prijenosu &mdash; sprje\u010dava beskona\u010dne petlje'
  },
  slide8_bullet3: {
    en: 'No dedicated routers needed &mdash; <span class="highlight">every device participates</span>',
    hr: 'Nisu potrebni posebni usmjeriva\u010di &mdash; <span class="highlight">svaki ure\u0111aj sudjeluje</span>'
  },

  // Slide 9
  slide9_heading: { en: "Message Flow &mdash; Step by Step", hr: "Tijek poruke &mdash; korak po korak" },
  slide9_tag1: { en: "1. Compose message on app", hr: "1. Napi\u0161i poruku u aplikaciji" },
  slide9_tag2: { en: "2. Send via Bluetooth/WiFi", hr: "2. Po\u0161alji putem Bluetootha/WiFi-ja" },
  slide9_tag3: { en: "3. Radio broadcasts (LoRa)", hr: "3. Radio emitira (LoRa)" },
  slide9_tag4: { en: "4. Neighbors rebroadcast", hr: "4. Susjedi ponovno emitiraju" },
  slide9_tag5: { en: "5. Target receives &amp; decrypts", hr: "5. Cilj prima i dekriptira" },
  slide9_card1_heading: { en: "Managed Flooding", hr: "Upravljano poplavljivanje" },
  slide9_flood1: { en: "Before rebroadcasting, node listens briefly", hr: "Prije ponovnog emitiranja, \u010dvor kratko slu\u0161a" },
  slide9_flood2: { en: "If another node already rebroadcasted &mdash; skip", hr: "Ako je drugi \u010dvor ve\u0107 ponovno emitirao &mdash; presko\u010di" },
  slide9_flood3: { en: "SNR-based contention: farther nodes get priority", hr: "Natjecanje temeljeno na SNR-u: dalji \u010dvorovi imaju prioritet" },
  slide9_flood4: { en: "Router/Repeater roles have higher priority", hr: "Router/Repeater uloge imaju vi\u0161i prioritet" },
  slide9_card2_heading: { en: "Next-Hop Routing (v2.6+)", hr: "Next-Hop usmjeravanje (v2.6+)" },
  slide9_nexthop1: { en: "First message uses managed flooding", hr: "Prva poruka koristi upravljano poplavljivanje" },
  slide9_nexthop2: { en: "System tracks which node relayed the ACK", hr: "Sustav prati koji \u010dvor je proslijedio ACK" },
  slide9_nexthop3: { en: "Subsequent messages route via known path", hr: "Sljede\u0107e poruke se usmjeravaju poznatim putem" },
  slide9_nexthop4: { en: "Falls back to flooding if route fails", hr: "Vra\u0107a se na poplavljivanje ako ruta ne uspije" },

  // Slide 10
  slide10_heading: { en: "Protocol Architecture", hr: "Arhitektura protokola" },
  slide10_layer3: {
    en: '<span class="layer-num">Layer 3</span><strong>Multi-Hop Messaging</strong><span class="dim">&mdash; Managed flooding + next-hop routing, hop limit, SNR contention</span>',
    hr: '<span class="layer-num">Sloj 3</span><strong>Vi\u0161e-skokovno slanje poruka</strong><span class="dim">&mdash; Upravljano poplavljivanje + next-hop usmjeravanje, ograni\u010denje skokova, SNR natjecanje</span>'
  },
  slide10_layer2: {
    en: '<span class="layer-num">Layer 2</span><strong>Reliable Zero-Hop</strong><span class="dim">&mdash; ACKs, retransmissions (max 3 attempts), timeout logic</span>',
    hr: '<span class="layer-num">Sloj 2</span><strong>Pouzdani nulti skok</strong><span class="dim">&mdash; Potvrde (ACK), ponovni prijenosi (maks. 3 poku\u0161aja), logika isteka vremena</span>'
  },
  slide10_layer1: {
    en: '<span class="layer-num">Layer 1</span><strong>Unreliable Zero-Hop</strong><span class="dim">&mdash; Single LoRa packet: 4B dest + 4B sender + 4B ID + flags + up to 237B payload</span>',
    hr: '<span class="layer-num">Sloj 1</span><strong>Nepouzdani nulti skok</strong><span class="dim">&mdash; Jedan LoRa paket: 4B odredi\u0161te + 4B po\u0161iljatelj + 4B ID + zastavice + do 237B korisni teret</span>'
  },
  slide10_layer0: {
    en: '<span class="layer-num">Layer 0</span><strong>LoRa Physical</strong><span class="dim">&mdash; Chirp spread spectrum, preamble=16, sync word=0x2B, CSMA/CA</span>',
    hr: '<span class="layer-num">Sloj 0</span><strong>LoRa fizi\u010dki sloj</strong><span class="dim">&mdash; Chirp spread spectrum, preambula=16, sync word=0x2B, CSMA/CA</span>'
  },
  slide10_proto: {
    en: 'Serialization: <span class="highlight">Protocol Buffers</span> (protobuf) &mdash; compact binary encoding for constrained links',
    hr: 'Serijalizacija: <span class="highlight">Protocol Buffers</span> (protobuf) &mdash; kompaktno binarno kodiranje za ograni\u010dene veze'
  },

  // Slide 11
  slide11_heading: { en: "Packet Structure", hr: "Struktura paketa" },
  slide11_bullet1: {
    en: 'Headers are <span class="highlight">unencrypted</span> &mdash; any node can relay without knowing the channel key',
    hr: 'Zaglavlja su <span class="highlight">neenkriptirana</span> &mdash; bilo koji \u010dvor mo\u017ee proslijediti bez poznavanja klju\u010da kanala'
  },
  slide11_bullet2: { en: "Broadcast destination: <code>0xFFFFFFFF</code>", hr: "Adresa za emitiranje: <code>0xFFFFFFFF</code>" },
  slide11_bullet3: {
    en: "Flags byte includes: hop limit, want-ack bit, via-MQTT bit",
    hr: "Bajt zastavica uklju\u010duje: ograni\u010denje skokova, want-ack bit, via-MQTT bit"
  },

  // Slide 12
  slide12_heading: { en: "Encryption &amp; Security", hr: "Enkripcija i sigurnost" },
  slide12_col1_heading: { en: "Channel Messages", hr: "Poruke na kanalu" },
  slide12_ch1: {
    en: '<span class="highlight">AES256-CTR</span> symmetric encryption',
    hr: '<span class="highlight">AES256-CTR</span> simetri\u010dna enkripcija'
  },
  slide12_ch2: { en: "Pre-Shared Key (PSK) per channel", hr: "Unaprijed dijeljeni klju\u010d (PSK) po kanalu" },
  slide12_ch3: { en: "Anyone with the key can read &amp; send", hr: "Tko god ima klju\u010d mo\u017ee \u010ditati i slati" },
  slide12_ch4: { en: 'Default key is public: <code>"AQ=="</code>', hr: 'Zadani klju\u010d je javan: <code>"AQ=="</code>' },
  slide12_ch5: { en: "Up to 8 channels per device", hr: "Do 8 kanala po ure\u0111aju" },
  slide12_dm_heading: { en: "Direct Messages (v2.5+)", hr: "Izravne poruke (v2.5+)" },
  slide12_dm1: {
    en: '<span class="highlight">x25519</span> public key cryptography',
    hr: '<span class="highlight">x25519</span> kriptografija javnog klju\u010da'
  },
  slide12_dm2: { en: "Each node has unique key pair", hr: "Svaki \u010dvor ima jedinstveni par klju\u010deva" },
  slide12_dm3: { en: "Encrypted with recipient\u2019s public key", hr: "Enkriptirano javnim klju\u010dem primatelja" },
  slide12_dm4: { en: "Signed with sender\u2019s private key", hr: "Potpisano privatnim klju\u010dem po\u0161iljatelja" },
  slide12_dm5: { en: "True end-to-end encryption", hr: "Prava end-to-end enkripcija" },
  slide12_limits_heading: { en: "Honest Limitations", hr: "Iskrena ograni\u010denja" },
  slide12_lim1: { en: "Not as secure as TLS 1.3 or Signal", hr: "Nije sigurno kao TLS 1.3 ili Signal" },
  slide12_lim2: { en: "No Perfect Forward Secrecy (PFS)", hr: "Nema Perfect Forward Secrecy (PFS)" },
  slide12_lim3: { en: "Channel msgs: no sender authentication", hr: "Poruke na kanalu: nema autentifikacije po\u0161iljatelja" },
  slide12_lim4: { en: "Node IDs based on MAC (spoofable)", hr: "ID-ovi \u010dvorova temeljeni na MAC adresi (mogu se la\u017eirati)" },
  slide12_lim5: { en: "x25519 is <strong>not</strong> quantum-resistant", hr: "x25519 <strong>nije</strong> otporan na kvantna ra\u010dunala" },
  slide12_lim6: { en: "AES256 <strong>is</strong> quantum-resistant", hr: "AES256 <strong>jest</strong> otporan na kvantna ra\u010dunala" },
  slide12_security_note: {
    en: "Security is practical for the use case &mdash; not designed for nation-state adversaries.",
    hr: "Sigurnost je prakti\u010dna za predvi\u0111enu upotrebu &mdash; nije dizajnirana za dr\u017eavne aktere."
  },

  // Slide 13
  slide13_heading: { en: "LoRa Radio Presets", hr: "LoRa radio postavke" },
  slide13_th_preset: { en: "Preset", hr: "Postavka" },
  slide13_th_data: { en: "Data Rate", hr: "Brzina" },
  slide13_th_usecase: { en: "Use Case", hr: "Primjena" },
  slide13_st_data: { en: "21.88 kbps", hr: "21,88 kbps" },
  slide13_st_use: { en: "Dense urban", hr: "Gust urbani prostor" },
  slide13_sf_data: { en: "10.94 kbps", hr: "10,94 kbps" },
  slide13_sf_use: { en: "Short range events", hr: "Kratki domet, doga\u0111aji" },
  slide13_lf_data: { en: "1.07 kbps", hr: "1,07 kbps" },
  slide13_lf_use: { en: '<span class="highlight">Default preset</span>', hr: '<span class="highlight">Zadana postavka</span>' },
  slide13_lm_data: { en: "0.34 kbps", hr: "0,34 kbps" },
  slide13_lm_use: { en: "Maximum range", hr: "Maksimalni domet" },
  slide13_note1: {
    en: 'Each SF step up = <span class="highlight">2&times; airtime</span> but ~2.5 dB extra link budget (more range)',
    hr: 'Svaki korak SF-a = <span class="highlight">2&times; vrijeme emitiranja</span> ali ~2,5 dB vi\u0161e link budgeta (ve\u0107i domet)'
  },
  slide13_note2: {
    en: "Trade-off: range vs throughput vs number of concurrent users",
    hr: "Kompromis: domet naspram propusnosti naspram broja istovremenih korisnika"
  },

  // Slide 14
  slide14_heading: { en: "Hardware Ecosystem", hr: "Hardverski ekosustav" },
  slide14_esp32_item2: { en: "Higher power consumption", hr: "Ve\u0107a potro\u0161nja energije" },
  slide14_esp32_item3: { en: "More RAM, lower cost", hr: "Vi\u0161e RAM-a, ni\u017ea cijena" },
  slide14_esp32_item4: { en: "Good for powered/indoor nodes", hr: "Dobro za napajane/unutarnje \u010dvorove" },
  slide14_nrf_item1: { en: "Bluetooth only", hr: "Samo Bluetooth" },
  slide14_nrf_item2: {
    en: '<span class="highlight">Very power efficient</span>',
    hr: '<span class="highlight">Vrlo energetski u\u010dinkovit</span>'
  },
  slide14_nrf_item3: { en: "UF2 bootloader (easy flash)", hr: "UF2 bootloader (jednostavan flash)" },
  slide14_nrf_item4: { en: "Ideal for solar / battery", hr: "Idealan za solarno / baterijsko napajanje" },
  slide14_rp_item1: { en: "Raspberry Pi chip", hr: "Raspberry Pi \u010dip" },
  slide14_rp_item2: { en: "Dual-core ARM", hr: "Dvojezgreni ARM" },
  slide14_rp_item3: { en: "Cost-effective DIY", hr: "Isplativo za DIY" },
  slide14_rp_item4: { en: "Growing support", hr: "Rstu\u0107a podr\u0161ka" },
  slide14_radio_note: {
    en: 'Radio chips: prefer <span class="highlight">Semtech SX126x / LR11xx</span> (newer, better) over SX127x (older)',
    hr: 'Radio \u010dipovi: preporu\u010duje se <span class="highlight">Semtech SX126x / LR11xx</span> (noviji, bolji) umjesto SX127x (stariji)'
  },
  slide14_price_note: {
    en: 'Price range: <span class="highlight">$20 &ndash; $80</span> for a complete node',
    hr: 'Raspon cijena: <span class="highlight">20 &ndash; 80 $</span> za kompletni \u010dvor'
  },

  // Slide 15
  slide15_heading: { en: "Popular Devices", hr: "Popularni ure\u0111aji" },
  slide15_th_device: { en: "Device", hr: "Ure\u0111aj" },
  slide15_th_display: { en: "Display", hr: "Zaslon" },
  slide15_th_price: { en: "Price Range", hr: "Cijena" },
  slide15_th_notable: { en: "Notable", hr: "Napomena" },
  slide15_tbeam_display: { en: "No (add-on)", hr: "Ne (dodatak)" },
  slide15_tbeam_gps: { en: "Yes", hr: "Da" },
  slide15_tbeam_price: { en: "~$35-45", hr: "~35-45 $" },
  slide15_tbeam_notable: { en: "Great all-rounder", hr: "Odli\u010dan svestrani" },
  slide15_echo_gps: { en: "Yes", hr: "Da" },
  slide15_echo_price: { en: "~$50-60", hr: "~50-60 $" },
  slide15_echo_notable: { en: "Low power, outdoor", hr: "Niska potro\u0161nja, vanjski" },
  slide15_heltec_gps: { en: "No", hr: "Ne" },
  slide15_heltec_price: { en: "~$18-22", hr: "~18-22 $" },
  slide15_heltec_notable: { en: "Cheapest option", hr: "Najjeftinija opcija" },
  slide15_rak_gps: { en: "Add-on", hr: "Dodatak" },
  slide15_rak_price: { en: "~$35-50", hr: "~35-50 $" },
  slide15_rak_notable: { en: "Modular (WisBlock)", hr: "Modularan (WisBlock)" },
  slide15_tdeck_gps: { en: "Add-on", hr: "Dodatak" },
  slide15_tdeck_price: { en: "~$50-60", hr: "~50-60 $" },
  slide15_tdeck_notable: { en: "Keyboard built-in", hr: "Ugra\u0111ena tipkovnica" },
  slide15_seeed_display: { en: "No", hr: "Ne" },
  slide15_seeed_gps: { en: "Yes", hr: "Da" },
  slide15_seeed_price: { en: "~$30", hr: "~30 $" },
  slide15_seeed_notable: { en: "IP65, tiny form factor", hr: "IP65, sitan oblik" },

  // Slide 16
  slide16_heading: { en: "Software Ecosystem", hr: "Softverski ekosustav" },
  slide16_firmware_heading: { en: "Firmware", hr: "Firmware" },
  slide16_fw1: { en: 'Written in <span class="highlight">C++ / PlatformIO</span>', hr: 'Napisan u <span class="highlight">C++ / PlatformIO</span>' },
  slide16_fw2: { en: "Built on FreeRTOS (ESP32) / Zephyr (nRF52)", hr: "Baziran na FreeRTOS (ESP32) / Zephyr (nRF52)" },
  slide16_fw3: { en: "Protocol Buffers for serialization", hr: "Protocol Buffers za serijalizaciju" },
  slide16_fw4: { en: "Modular architecture: radio, mesh, GPS, display, power", hr: "Modularna arhitektura: radio, mesh, GPS, zaslon, napajanje" },
  slide16_fw5: { en: "OTA updates via Bluetooth or WiFi", hr: "OTA a\u017euriranja putem Bluetootha ili WiFi-ja" },
  slide16_cli_heading: { en: "Python CLI &amp; Library", hr: "Python CLI i biblioteka" },
  slide16_cli1: { en: "Configure devices, send messages", hr: "Konfiguracija ure\u0111aja, slanje poruka" },
  slide16_cli2: { en: "Scriptable automation", hr: "Skriptabilna automatizacija" },
  slide16_mobile_heading: { en: "Mobile Apps", hr: "Mobilne aplikacije" },
  slide16_mob1: { en: '<span class="highlight">Android</span> &mdash; Kotlin, Jetpack Compose', hr: '<span class="highlight">Android</span> &mdash; Kotlin, Jetpack Compose' },
  slide16_mob2: { en: '<span class="highlight">iOS</span> &mdash; Swift, SwiftUI', hr: '<span class="highlight">iOS</span> &mdash; Swift, SwiftUI' },
  slide16_mob3: { en: "Bluetooth connection to device", hr: "Bluetooth veza s ure\u0111ajem" },
  slide16_mob4: { en: "Map view, messaging, node management", hr: "Prikaz karte, poruke, upravljanje \u010dvorovima" },
  slide16_web_heading: { en: "Web Client", hr: "Web klijent" },
  slide16_web1: { en: 'Built with <span class="highlight">TypeScript / React</span>', hr: 'Izra\u0111en u <span class="highlight">TypeScript / React</span>' },
  slide16_web2: { en: "Web Bluetooth &amp; Web Serial APIs", hr: "Web Bluetooth i Web Serial API-ji" },
  slide16_web3: { en: "Runs entirely in the browser", hr: "Radi u potpunosti u pregledniku" },
  slide16_web4: { en: "Flash firmware from the web!", hr: "Flash firmware iz preglednika!" },

  // Slide 17
  slide17_heading: { en: "Open-Source Repositories", hr: "Repozitoriji otvorenog koda" },
  slide17_th_repo: { en: "Repository", hr: "Repozitorij" },
  slide17_th_lang: { en: "Language", hr: "Jezik" },
  slide17_th_desc: { en: "Description", hr: "Opis" },
  slide17_firmware_desc: { en: "Device firmware (ESP32, nRF52, RP2040)", hr: "Firmware ure\u0111aja (ESP32, nRF52, RP2040)" },
  slide17_android_desc: { en: "Android companion app", hr: "Android prate\u0107a aplikacija" },
  slide17_apple_desc: { en: "iOS / macOS companion app", hr: "iOS / macOS prate\u0107a aplikacija" },
  slide17_web_desc: { en: "Web client &amp; flasher", hr: "Web klijent i flasher" },
  slide17_python_desc: { en: "CLI tool &amp; Python API", hr: "CLI alat i Python API" },
  slide17_proto_desc: { en: "Shared protocol definitions", hr: "Dijeljene definicije protokola" },
  slide17_docs_desc: { en: "Documentation website (this repo!)", hr: "Dokumentacijska web stranica (ovaj repo!)" },
  slide17_note: {
    en: 'All repos on GitHub under the <strong>meshtastic</strong> organization',
    hr: 'Svi repozitoriji na GitHubu pod <strong>meshtastic</strong> organizacijom'
  },

  // Slide 18
  slide18_heading: { en: "Mesh Network Scaling", hr: "Skaliranje mesh mre\u017ee" },
  slide18_col1_heading: { en: "Auto-Scaling Broadcast Intervals", hr: "Automatsko skaliranje intervala emitiranja" },
  slide18_intervals_label: { en: "Default intervals:", hr: "Zadani intervali:" },
  slide18_telemetry: { en: 'Device telemetry: <span class="highlight">30 min</span>', hr: 'Telemetrija ure\u0111aja: <span class="highlight">30 min</span>' },
  slide18_position: { en: 'Position: <span class="highlight">15 min</span>', hr: 'Pozicija: <span class="highlight">15 min</span>' },
  slide18_nodeinfo: { en: 'Node info: <span class="highlight">3 hours</span>', hr: 'Info o \u010dvoru: <span class="highlight">3 sata</span>' },
  slide18_scale_note: {
    en: 'When mesh exceeds <span class="highlight">40 nodes</span>, intervals auto-scale:',
    hr: 'Kada mre\u017ea prekora\u010di <span class="highlight">40 \u010dvorova</span>, intervali se automatski skaliraju:'
  },
  slide18_formula: {
    en: 'interval &times; (1.0 + (nodes - 40) &times; 0.075)',
    hr: 'interval &times; (1,0 + (\u010dvorovi - 40) &times; 0,075)'
  },
  slide18_col2_heading: { en: "CSMA/CA", hr: "CSMA/CA" },
  slide18_csma1: { en: "Channel Activity Detection (CAD) before TX", hr: "Detekcija aktivnosti kanala (CAD) prije slanja" },
  slide18_csma2: { en: "If channel busy &rarr; random backoff", hr: "Ako je kanal zauzet &rarr; nasumi\u010dno \u010dekanje" },
  slide18_csma3: { en: "Contention window scales with utilization", hr: "Prozor natjecanja skalira se s iskoristivosti" },
  slide18_limits_heading: { en: "Practical Limits", hr: "Prakti\u010dna ograni\u010denja" },
  slide18_lim1: {
    en: 'Works best with <span class="highlight">&lt;100 nodes</span> per mesh',
    hr: 'Najbolje radi s <span class="highlight">&lt;100 \u010dvorova</span> po mre\u017ei'
  },
  slide18_lim2: { en: "Message delivery is best-effort", hr: "Dostava poruka je po principu najboljeg truda" },
  slide18_lim3: { en: "Not designed for high-throughput data", hr: "Nije dizajnirano za visoku propusnost podataka" },

  // Slide 19
  slide19_heading: { en: "Range Records", hr: "Rekordi dosega" },
  slide19_g2g_label: { en: "Ground-to-Ground Record", hr: "Rekord tlo-tlo" },
  slide19_g2g_b1: { en: "868 MHz, SF12, BW 62.5 kHz", hr: "868 MHz, SF12, BW 62,5 kHz" },
  slide19_g2g_b2: { en: "RAK4631 + 55cm collinear antenna", hr: "RAK4631 + 55cm kolinearna antena" },
  slide19_g2g_b3: { en: "Mountain-to-mountain path", hr: "S planine na planinu" },
  slide19_g2a_label: { en: "Ground-to-Air Record", hr: "Rekord tlo-zrak" },
  slide19_g2a_b2: { en: "LILYGO T-Beams, stock antennas", hr: "LILYGO T-Beams, tvorni\u010dke antene" },
  slide19_g2a_b3: { en: "One device in weather balloon", hr: "Jedan ure\u0111aj u meteorolo\u0161kom balonu" },
  slide19_typical: {
    en: 'Typical real-world urban range: <span class="highlight">1&ndash;5 km</span> &nbsp;|&nbsp; Line-of-sight: <span class="highlight">10&ndash;30+ km</span>',
    hr: 'Tipi\u010dan domet u gradu: <span class="highlight">1&ndash;5 km</span> &nbsp;|&nbsp; Vidna linija: <span class="highlight">10&ndash;30+ km</span>'
  },

  // Slide 20
  slide20_heading: { en: "Use Cases", hr: "Primjene" },
  slide20_card1_heading: { en: "Emergency &amp; Disaster", hr: "Hitne situacije i katastrofe" },
  slide20_em1: { en: "Communication when cell towers fail", hr: "Komunikacija kada mobilni tornjevi ne rade" },
  slide20_em2: { en: "Coordinate rescue operations", hr: "Koordinacija spa\u0161ila\u010dkih operacija" },
  slide20_em3: { en: "Share GPS locations", hr: "Dijeljenje GPS lokacija" },
  slide20_card2_heading: { en: "Outdoor &amp; Adventure", hr: "Aktivnosti na otvorenom" },
  slide20_out1: { en: "Hiking group coordination", hr: "Koordinacija planinarske grupe" },
  slide20_out2: { en: "Off-grid camping", hr: "Kampiranje izvan mre\u017ee" },
  slide20_out3: { en: "Ski resort communication", hr: "Komunikacija na skijali\u0161tima" },
  slide20_card3_heading: { en: "Community Networks", hr: "Mre\u017ee zajednice" },
  slide20_com1: { en: "Neighborhood mesh", hr: "Mesh mre\u017ea u susjedstvu" },
  slide20_com2: { en: "Event communication", hr: "Komunikacija na doga\u0111ajima" },
  slide20_com3: { en: "Farm / rural connectivity", hr: "Farme / ruralna povezivost" },
  slide20_card4_heading: { en: "IoT &amp; Sensors", hr: "IoT i senzori" },
  slide20_iot1: { en: "Environmental monitoring", hr: "Pra\u0107enje okoline" },
  slide20_iot2: { en: "Remote telemetry", hr: "Udaljena telemetrija" },
  slide20_iot3: { en: "Solar-powered sensor nodes", hr: "Solarno napajani senzorski \u010dvorovi" },
  slide20_card5_heading: { en: "TAK Integration", hr: "TAK integracija" },
  slide20_tak1: { en: "Team Awareness Kit (military/SAR)", hr: "Team Awareness Kit (vojska/Si\u0160)" },
  slide20_tak2: { en: "Situational awareness overlay", hr: "Situacijska svjesnost" },
  slide20_tak3: { en: "Position tracking via mesh", hr: "Pra\u0107enje pozicije putem mesha" },
  slide20_card6_heading: { en: "Education &amp; Makers", hr: "Edukacija i makeri" },
  slide20_edu1: { en: "Learn radio/networking concepts", hr: "U\u010denje koncepata radija/mre\u017ea" },
  slide20_edu2: { en: "DIY hardware projects", hr: "DIY hardverski projekti" },
  slide20_edu3: { en: "Great for hackathons", hr: "Odli\u010dno za hackatone" },

  // Slide 21
  slide21_heading: { en: "Built-in Modules", hr: "Ugra\u0111eni moduli" },
  slide21_mod1: { en: '<span class="highlight">Text Messaging</span> &mdash; channel &amp; direct', hr: '<span class="highlight">Tekstualne poruke</span> &mdash; kanalne i izravne' },
  slide21_mod2: { en: '<span class="highlight">Position Sharing</span> &mdash; GPS with smart broadcast', hr: '<span class="highlight">Dijeljenje pozicije</span> &mdash; GPS s pametnim emitiranjem' },
  slide21_mod3: { en: '<span class="highlight">Telemetry</span> &mdash; battery, voltage, temp, humidity', hr: '<span class="highlight">Telemetrija</span> &mdash; baterija, napon, temperatura, vlaga' },
  slide21_mod4: { en: '<span class="highlight">Range Test</span> &mdash; automated signal testing', hr: '<span class="highlight">Test dosega</span> &mdash; automatizirano testiranje signala' },
  slide21_mod5: { en: '<span class="highlight">Store &amp; Forward</span> &mdash; buffer msgs for offline nodes', hr: '<span class="highlight">Pohrani i proslijedi</span> &mdash; me\u0111uspremnik za offline \u010dvorove' },
  slide21_mod6: { en: '<span class="highlight">Serial Module</span> &mdash; UART bridge', hr: '<span class="highlight">Serijski modul</span> &mdash; UART most' },
  slide21_mod7: { en: '<span class="highlight">MQTT Gateway</span> &mdash; bridge to internet', hr: '<span class="highlight">MQTT pristupnik</span> &mdash; most prema internetu' },
  slide21_mod8: { en: '<span class="highlight">Neighbor Info</span> &mdash; mesh topology', hr: '<span class="highlight">Info o susjedima</span> &mdash; topologija mre\u017ee' },
  slide21_mod9: { en: '<span class="highlight">Detection Sensor</span> &mdash; motion/door alerts', hr: '<span class="highlight">Detekcijski senzor</span> &mdash; upozorenja za pokret/vrata' },
  slide21_mod10: { en: '<span class="highlight">Remote Hardware</span> &mdash; GPIO control over mesh', hr: '<span class="highlight">Udaljeni hardver</span> &mdash; GPIO kontrola putem mesha' },
  slide21_note: {
    en: "Modules can be enabled/disabled per device via configuration",
    hr: "Moduli se mogu omogu\u0107iti/onemogu\u0107iti po ure\u0111aju putem konfiguracije"
  },

  // Slide 22
  slide22_heading: { en: "MQTT Bridge &mdash; Connecting to the Internet", hr: "MQTT most &mdash; povezivanje s internetom" },
  slide22_bullet1: { en: "Bridge local LoRa mesh to the internet via MQTT protocol", hr: "Premosti lokalnu LoRa mesh mre\u017eu na internet putem MQTT protokola" },
  slide22_bullet2: { en: "Connect separate meshes across the world", hr: "Pove\u017ei odvojene mesh mre\u017ee diljem svijeta" },
  slide22_bullet3: {
    en: 'Integrate with <span class="highlight">Home Assistant</span>, dashboards, alerting systems',
    hr: 'Integracija s <span class="highlight">Home Assistantom</span>, nadzornim plo\u010dama, sustavima upozorenja'
  },
  slide22_bullet4: { en: 'Public MQTT server available: <code>mqtt.meshtastic.org</code>', hr: 'Javni MQTT poslu\u017eitelj dostupan: <code>mqtt.meshtastic.org</code>' },

  // Slide 23
  slide23_heading: { en: "Getting Started", hr: "Kako po\u010deti" },
  slide23_step1: {
    en: "<strong>Get hardware</strong> &mdash; cheapest option: Heltec LoRa32 V3 (~$20). Recommended: LILYGO T-Beam or RAK Starter Kit",
    hr: "<strong>Nabavi hardver</strong> &mdash; najjeftinija opcija: Heltec LoRa32 V3 (~20 $). Preporu\u010deno: LILYGO T-Beam ili RAK Starter Kit"
  },
  slide23_step2: {
    en: '<strong>Flash firmware</strong> &mdash; visit <span class="highlight">flasher.meshtastic.org</span> in Chrome (uses Web Serial!)',
    hr: '<strong>Instaliraj firmware</strong> &mdash; posjetite <span class="highlight">flasher.meshtastic.org</span> u Chromeu (koristi Web Serial!)'
  },
  slide23_step3: {
    en: "<strong>Install companion app</strong> &mdash; Android (Play Store), iOS (App Store), or Web Client",
    hr: "<strong>Instaliraj prate\u0107u aplikaciju</strong> &mdash; Android (Play Store), iOS (App Store), ili Web klijent"
  },
  slide23_step4: {
    en: "<strong>Connect via Bluetooth</strong> &mdash; pair device with your phone",
    hr: "<strong>Pove\u017ei putem Bluetootha</strong> &mdash; uparite ure\u0111aj s telefonom"
  },
  slide23_step5: {
    en: "<strong>Configure</strong> &mdash; set region, change default channel key, set your name",
    hr: "<strong>Konfiguriraj</strong> &mdash; postavi regiju, promijeni zadani klju\u010d kanala, postavi ime"
  },
  slide23_step6: {
    en: "<strong>Share channel</strong> &mdash; via QR code or URL &mdash; others scan to join your mesh",
    hr: "<strong>Podijeli kanal</strong> &mdash; putem QR koda ili URL-a &mdash; drugi skeniraju da se priklju\u010de va\u0161oj mre\u017ei"
  },

  // Slide 24
  slide24_heading: { en: "Device Roles", hr: "Uloge ure\u0111aja" },
  slide24_th_role: { en: "Role", hr: "Uloga" },
  slide24_th_behavior: { en: "Behavior", hr: "Pona\u0161anje" },
  slide24_th_bestfor: { en: "Best For", hr: "Najbolje za" },
  slide24_client_behavior: { en: "Default role &mdash; sends, receives, rebroadcasts", hr: "Zadana uloga &mdash; \u0161alje, prima, ponovno emitira" },
  slide24_client_best: { en: "Handheld devices", hr: "Ru\u010dne ure\u0111aje" },
  slide24_mute_behavior: { en: "Sends &amp; receives but does not rebroadcast", hr: "\u0160alje i prima ali ne emitira ponovno" },
  slide24_mute_best: { en: "Passive listeners", hr: "Pasivne slu\u0161atelje" },
  slide24_router_behavior: { en: "Prioritized for rebroadcasting, minimal display", hr: "Prioritiziran za ponovno emitiranje, minimalan zaslon" },
  slide24_router_best: { en: "Fixed relay points", hr: "Fiksne relejne to\u010dke" },
  slide24_repeater_behavior: { en: "Only rebroadcasts &mdash; no local processing", hr: "Samo ponovno emitira &mdash; nema lokalne obrade" },
  slide24_repeater_best: { en: "Remote solar relays", hr: "Udaljene solarne releje" },
  slide24_tracker_behavior: { en: "Optimized for GPS position broadcasting", hr: "Optimiziran za emitiranje GPS pozicije" },
  slide24_tracker_best: { en: "Asset/pet tracking", hr: "Pra\u0107enje imovine/ku\u0107nih ljubimaca" },
  slide24_sensor_behavior: { en: "Optimized for telemetry data reporting", hr: "Optimiziran za slanje telemetrijskih podataka" },
  slide24_sensor_best: { en: "Environmental monitoring", hr: "Pra\u0107enje okoline" },

  // Slide 25
  slide25_heading: { en: "Why Meshtastic Matters", hr: "Za\u0161to je Meshtastic va\u017ean" },
  slide25_users_heading: { en: "For Users", hr: "Za korisnike" },
  slide25_usr1: { en: "Communication independence from telecom", hr: "Neovisnost komunikacije od telekoma" },
  slide25_usr2: { en: "Privacy by design (encrypted, no accounts)", hr: "Privatnost po dizajnu (enkriptirano, bez ra\u010duna)" },
  slide25_usr3: { en: "Affordable &mdash; no subscription fees", hr: "Pristupa\u010dno &mdash; bez pretpla\u0107ivanja" },
  slide25_usr4: { en: "Works everywhere: mountains, oceans, deserts", hr: "Radi svugdje: planine, oceani, pustinje" },
  slide25_eng_heading: { en: "For Engineers", hr: "Za in\u017eenjere" },
  slide25_eng1: { en: "Fascinating distributed systems problem", hr: "Fascinantan problem distribuiranih sustava" },
  slide25_eng2: { en: "Real-world RF engineering challenges", hr: "Stvarni RF in\u017eenjerski izazovi" },
  slide25_eng3: { en: "Cross-platform: firmware, mobile, web, CLI", hr: "Vi\u0161eplatformski: firmware, mobilni, web, CLI" },
  slide25_eng4: { en: "Active open-source community to contribute to", hr: "Aktivna open-source zajednica za doprinos" },
  slide25_eng5: { en: "Great learning platform for IoT &amp; mesh networking", hr: "Izvrsna platforma za u\u010denje IoT-a i mesh mre\u017ea" },
  slide25_quote: {
    en: "\u201cA mesh network you can set up in 10 minutes for $20 that works without any infrastructure.\u201d",
    hr: "\u201cMesh mre\u017ea koju mo\u017eete postaviti za 10 minuta za 20 $ i koja radi bez ikakve infrastrukture.\u201d"
  },

  // Slide 26
  slide26_heading: { en: "Resources &amp; Links", hr: "Resursi i linkovi" },
  slide26_official_heading: { en: "Official", hr: "Slu\u017ebeno" },
  slide26_off1: { en: 'Website: <span class="highlight">meshtastic.org</span>', hr: 'Web stranica: <span class="highlight">meshtastic.org</span>' },
  slide26_off2: { en: 'Docs: <span class="highlight">meshtastic.org/docs</span>', hr: 'Dokumentacija: <span class="highlight">meshtastic.org/docs</span>' },
  slide26_off3: { en: 'Flasher: <span class="highlight">flasher.meshtastic.org</span>', hr: 'Flasher: <span class="highlight">flasher.meshtastic.org</span>' },
  slide26_off4: { en: 'GitHub: <span class="highlight">github.com/meshtastic</span>', hr: 'GitHub: <span class="highlight">github.com/meshtastic</span>' },
  slide26_off5: { en: 'Discord: <span class="highlight">meshtastic.org/discord</span>', hr: 'Discord: <span class="highlight">meshtastic.org/discord</span>' },
  slide26_community_heading: { en: "Community", hr: "Zajednica" },
  slide26_com0a: { en: 'Croatian community: <span class="highlight">cromesh.eu</span>', hr: 'Hrvatska zajednica: <span class="highlight">cromesh.eu</span>' },
  slide26_com0b: { en: 'Croatian mesh map: <span class="highlight">map.cromesh.eu</span>', hr: 'Hrvatska mesh karta: <span class="highlight">map.cromesh.eu</span>' },
  slide26_com1: { en: 'Local mesh maps: <span class="highlight">meshmap.net</span>', hr: 'Lokalne mesh karte: <span class="highlight">meshmap.net</span>' },
  slide26_com2: { en: 'Reddit: <span class="highlight">r/meshtastic</span>', hr: 'Reddit: <span class="highlight">r/meshtastic</span>' },
  slide26_com3: { en: 'YouTube: search "Meshtastic" for setup guides', hr: 'YouTube: preta\u017eite "Meshtastic" za vodi\u010de' },
  slide26_com4: { en: "3D printable enclosures on Thingiverse", hr: "3D ispisiva ku\u0107i\u0161ta na Thingiverseu" },

  // Slide 27
  slide27_heading: { en: "Questions?", hr: "Pitanja?" },
  slide27_thanks: { en: "Thank you!", hr: "Hvala!" },

  // Firmware Deep Dive — section divider
  fw_divider_heading: { en: "Firmware Architecture", hr: "Arhitektura firmwarea" },
  fw_divider_sub: { en: "Deep Dive", hr: "Dubinski pregled" },
  fw_divider_note: { en: "For the engineers in the room", hr: "Za in\u017eenjere u publici" },

  // Slide 28 — Codebase Map
  slide28_heading: { en: "Codebase Map", hr: "Karta koda" },
  slide28_mesh: {
    en: "<code>mesh/</code> \u2014 <span class=\"highlight\">routing, radio, channels, NodeDB</span>",
    hr: "<code>mesh/</code> \u2014 <span class=\"highlight\">usmjeravanje, radio, kanali, NodeDB</span>"
  },
  slide28_modules: {
    en: "<code>modules/</code> \u2014 <span class=\"highlight\">plugin system, 20+ built-in modules</span>",
    hr: "<code>modules/</code> \u2014 <span class=\"highlight\">plugin sustav, 20+ ugra\u0111enih modula</span>"
  },
  slide28_platform: {
    en: "<code>platform/</code> \u2014 <span class=\"highlight\">per-MCU HAL (ESP32, nRF52, RP2040\u2026)</span>",
    hr: "<code>platform/</code> \u2014 <span class=\"highlight\">HAL po MCU-u (ESP32, nRF52, RP2040\u2026)</span>"
  },
  slide28_concurrency: {
    en: "<code>concurrency/</code> \u2014 <span class=\"highlight\">OSThread, scheduling, locks</span>",
    hr: "<code>concurrency/</code> \u2014 <span class=\"highlight\">OSThread, raspore\u0111ivanje, brave</span>"
  },
  slide28_graphics: {
    en: "<code>graphics/</code> \u2014 <span class=\"highlight\">OLED, TFT, e-ink display drivers</span>",
    hr: "<code>graphics/</code> \u2014 <span class=\"highlight\">drajveri za OLED, TFT, e-ink zaslone</span>"
  },
  slide28_mqtt: {
    en: "<code>mqtt/</code> \u2014 <span class=\"highlight\">internet bridge via WiFi</span>",
    hr: "<code>mqtt/</code> \u2014 <span class=\"highlight\">internetski most putem WiFi-ja</span>"
  },

  // Slide 29 — Build System & Hardware
  slide29_heading: { en: "Build System &amp; Hardware", hr: "Build sustav i hardver" },
  slide29_mcu_heading: { en: "163 board variants \u2014 7 MCU families", hr: "163 varijante plo\u010da \u2014 7 MCU obitelji" },
  slide29_th_mcu: { en: "MCU", hr: "MCU" },
  slide29_th_count: { en: "Variants", hr: "Varijante" },
  slide29_th_examples: { en: "Examples", hr: "Primjeri" },
  slide29_build_heading: { en: "Build", hr: "Izgradnja" },
  slide29_flags_heading: { en: "Conditional Compilation", hr: "Uvjetna kompilacija" },

  // Slide 30 — Init Sequence
  slide30_heading: { en: "Startup &amp; Init Sequence", hr: "Redoslijed pokretanja i inicijalizacije" },
  slide30_step1: {
    en: "<strong>main.cpp</strong> \u2014 hardware detection via <code>ScanI2C</code>",
    hr: "<strong>main.cpp</strong> \u2014 detekcija hardvera putem <code>ScanI2C</code>"
  },
  slide30_step2: {
    en: "<strong>FSCommon</strong> \u2014 mount LittleFS / SPIFFS",
    hr: "<strong>FSCommon</strong> \u2014 montiranje LittleFS / SPIFFS"
  },
  slide30_step3: {
    en: "<strong>NodeDB</strong> \u2014 load device state from <code>/prefs/</code>",
    hr: "<strong>NodeDB</strong> \u2014 u\u010ditavanje stanja ure\u0111aja iz <code>/prefs/</code>"
  },
  slide30_step4: {
    en: "<strong>Screen</strong> \u2014 init OLED / TFT / e-ink display",
    hr: "<strong>Screen</strong> \u2014 inicijalizacija OLED / TFT / e-ink zaslona"
  },
  slide30_step5: {
    en: "<strong>MeshService</strong> \u2014 start Router + Radio + Bluetooth",
    hr: "<strong>MeshService</strong> \u2014 pokretanje Routera + Radija + Bluetootha"
  },
  slide30_step6: {
    en: "<strong>setupModules()</strong> \u2014 instantiate all plugin modules",
    hr: "<strong>setupModules()</strong> \u2014 instanciranje svih plugin modula"
  },
  slide30_step7: {
    en: "<strong>PowerFSM</strong> \u2014 enter main event loop",
    hr: "<strong>PowerFSM</strong> \u2014 ulaz u glavnu petlju doga\u0111aja"
  },
  slide30_note: {
    en: "Platform-specific wiring in <code>src/platform/[mcu]/main-[mcu].cpp</code>",
    hr: "Platformski kod u <code>src/platform/[mcu]/main-[mcu].cpp</code>"
  },

  // Slide 31 — Router Hierarchy
  slide31_heading: { en: "Router Hierarchy", hr: "Hijerarhija usmjeriva\u010da" },
  slide31_files: {
    en: "<code>src/mesh/Router.h</code> \u00b7 <code>FloodingRouter.h</code> \u00b7 <code>NextHopRouter.h</code> \u00b7 <code>ReliableRouter.h</code>",
    hr: "<code>src/mesh/Router.h</code> \u00b7 <code>FloodingRouter.h</code> \u00b7 <code>NextHopRouter.h</code> \u00b7 <code>ReliableRouter.h</code>"
  },
  slide31_flow_heading: { en: "Packet Flow", hr: "Tijek paketa" },
  slide31_flow1: {
    en: "Radio RX \u2192 <code>enqueueReceivedMessage()</code>",
    hr: "Radio RX \u2192 <code>enqueueReceivedMessage()</code>"
  },
  slide31_flow2: {
    en: "<code>Router::runOnce()</code> processes queue",
    hr: "<code>Router::runOnce()</code> obra\u0111uje red \u010dekanja"
  },
  slide31_flow3: {
    en: "Deliver to local modules via <code>MeshService</code>",
    hr: "Dostava lokalnim modulima putem <code>MeshService</code>"
  },
  slide31_flow4: {
    en: "Rebroadcast? \u2192 <code>perhapsRebroadcast()</code>",
    hr: "Ponoviti emitiranje? \u2192 <code>perhapsRebroadcast()</code>"
  },
  slide31_flow5: {
    en: "TX: <code>sendLocal()</code> \u2192 radio TX queue",
    hr: "TX: <code>sendLocal()</code> \u2192 radio TX red"
  },
  slide31_thread_note: {
    en: "Router is an <code>OSThread</code> \u2014 runs cooperatively via <code>ArduinoThread</code> scheduler",
    hr: "Router je <code>OSThread</code> \u2014 kooperativno radi putem <code>ArduinoThread</code> raspora\u0111iva\u010da"
  },

  // Slide 32 — Module / Plugin System
  slide32_heading: { en: "Module / Plugin System", hr: "Modul / Plugin sustav" },
  slide32_lifecycle_heading: { en: "MeshModule Lifecycle", hr: "MeshModule \u017eivotni ciklus" },
  slide32_dispatch: {
    en: "Dispatch: <code>MeshModule::callModules()</code> iterates all registered modules by portnum",
    hr: "Dispatch: <code>MeshModule::callModules()</code> prolazi kroz sve registrirane module po portnumu"
  },
  slide32_modules_heading: { en: "Key Modules", hr: "Klju\u010dni moduli" },
  slide32_mod_text: { en: "channel &amp; DM text", hr: "kanalne i izravne poruke" },
  slide32_mod_pos: { en: "GPS broadcast", hr: "GPS emitiranje" },
  slide32_mod_telem: { en: "sensors &amp; battery", hr: "senzori i baterija" },
  slide32_mod_admin: { en: "device config via mesh", hr: "konfiguracija ure\u0111aja putem mesha" },
  slide32_mod_sf: { en: "buffer for offline nodes", hr: "me\u0111uspremnik za offline \u010dvorove" },
  slide32_mod_serial: { en: "UART bridge", hr: "UART most" },
  slide32_mod_trace: { en: "path tracing", hr: "tra\u017eenje puta" },
  slide32_mod_neighbor: { en: "topology map", hr: "topolo\u0161ka karta" },
  slide32_exclude: {
    en: "Excluded per-board via <code>-DMESHTASTIC_EXCLUDE_*</code>",
    hr: "Isklju\u010deno po plo\u010di putem <code>-DMESHTASTIC_EXCLUDE_*</code>"
  },

  // Slide 33 — Platform HAL
  slide33_heading: { en: "Platform HAL", hr: "Platformski HAL" },
  slide33_abstractions_heading: { en: "Common Abstractions", hr: "Zajedni\u010dke apstrakcije" },
  slide33_abs1: {
    en: "<code>PowerHAL</code> \u2014 sleep, deep-sleep, battery",
    hr: "<code>PowerHAL</code> \u2014 sleep, deep-sleep, baterija"
  },
  slide33_abs2: {
    en: "<code>CryptoEngine</code> \u2014 AES-CTR, x25519",
    hr: "<code>CryptoEngine</code> \u2014 AES-CTR, x25519"
  },
  slide33_abs3: {
    en: "<code>FSCommon</code> \u2014 LittleFS / SPIFFS abstraction",
    hr: "<code>FSCommon</code> \u2014 LittleFS / SPIFFS apstrakcija"
  },
  slide33_abs4: {
    en: "<code>SPILock</code> \u2014 shared SPI bus arbitration",
    hr: "<code>SPILock</code> \u2014 arbitracija dijeljenjem SPI sabirnice"
  },
  slide33_abs5: {
    en: "<code>RadioInterface</code> \u2192 <code>RadioLibInterface</code> \u2192 chipset drivers",
    hr: "<code>RadioInterface</code> \u2192 <code>RadioLibInterface</code> \u2192 drajveri \u010dipova"
  },
  slide33_note: {
    en: "Compile-time selection: <code>#ifdef ARCH_ESP32</code>, <code>ARCH_NRF52</code>, <code>ARCH_RP2040</code>",
    hr: "Odabir pri kompilaciji: <code>#ifdef ARCH_ESP32</code>, <code>ARCH_NRF52</code>, <code>ARCH_RP2040</code>"
  },

  // Slide 34 — Key Data Structures
  slide34_heading: { en: "Key Data Structures", hr: "Klju\u010dne strukture podataka" },
  slide34_header_heading: { en: "PacketHeader (12 bytes)", hr: "PacketHeader (12 bajtova)" },
  slide34_nodedb_heading: { en: "NodeDB Segments", hr: "NodeDB segmenti" },
  slide34_seg_config: { en: "\u2014 radio, device, display settings", hr: "\u2014 radio, ure\u0111aj, postavke zaslona" },
  slide34_seg_module: { en: "\u2014 per-module config", hr: "\u2014 konfiguracija po modulu" },
  slide34_seg_channels: { en: "\u2014 PSK &amp; channel roles", hr: "\u2014 PSK i uloge kanala" },
  slide34_seg_state: { en: "\u2014 runtime state", hr: "\u2014 stanje izvr\u0161avanja" },
  slide34_seg_nodes: { en: "\u2014 known peer nodes", hr: "\u2014 poznati \u010dvorovi u mre\u017ei" },
  slide34_radio_heading: { en: "Radio Chipset Chain", hr: "Lanac radio \u010dipova" },

  // Slide 35 — Where to Start
  slide35_heading: { en: "Where to Start", hr: "Gdje po\u010deti" },
  slide35_embedded_heading: { en: "Embedded / HW", hr: "Embedded / HW" },
  slide35_emb_tip: {
    en: "Add a board: create a new <code>variants/</code> dir",
    hr: "Dodaj plo\u010du: stvori novi <code>variants/</code> direktorij"
  },
  slide35_protocol_heading: { en: "Protocol / Networking", hr: "Protokol / Mre\u017ea" },
  slide35_proto_tip: {
    en: "Protobuf defs: <code>protobufs/meshtastic/</code>",
    hr: "Protobuf definicije: <code>protobufs/meshtastic/</code>"
  },
  slide35_sw_heading: { en: "SW / Application", hr: "SW / Aplikacija" },
  slide35_sw_tip: {
    en: "Add a feature: subclass <code>MeshModule</code>",
    hr: "Dodaj funkcionalnost: naslijedi <code>MeshModule</code>"
  },
  slide35_note: {
    en: "C++17 \u00b7 PlatformIO \u00b7 RadioLib \u00b7 nanopb \u00b7 ArduinoThread",
    hr: "C++17 \u00b7 PlatformIO \u00b7 RadioLib \u00b7 nanopb \u00b7 ArduinoThread"
  }
};
