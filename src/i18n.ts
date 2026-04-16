export type Lang = 'en' | 'de'

export const translations = {
  en: {
    // Navbar
    navFeatures: 'Features',
    navHowItWorks: 'How It Works',
    navScreenshots: 'Screenshots',
    navDownload: 'Download Free',

    // Hero
    heroBadge: 'Real-Time AI on Your Smartphone',
    heroHeadline1: 'Your AI',
    heroHeadlineGradient: 'Bike Position Coach',
    heroHeadline2: 'is in your pocket.',
    heroSub: 'WattPose turns your phone camera into a professional cycling coach. Instant posture feedback, Virtual CdA tracking, fatigue detection — all on-device. No wearable required.',
    heroCtaDownload: 'Download on the',
    heroCtaAppStore: 'App Store',
    heroCtaHowItWorks: 'See How It Works',
    heroProof1: 'Free to download',
    heroProof2: '100% on-device AI',
    heroProof3: 'No wearable needed',
    heroScroll: 'Scroll to explore',

    // Stats
    stat1Label: 'Biomechanical metrics tracked live',
    stat2Label: 'On-device AI pose detection',
    stat3Label: 'Highlight reel per session',
    stat4Label: 'On-device — your data stays on phone',

    // Features
    featuresLabel: 'Features',
    featuresHeadline1: 'Everything a pro fitting',
    featuresHeadlineGradient: 'costs €300+',
    featuresHeadline2: '— free in your pocket.',
    featuresSub: 'Professional-grade biomechanical analysis that used to require a specialist lab. Now runs on your smartphone while you train.',
    features: [
      {
        title: 'Real-Time AI Analysis',
        desc: '15 FPS on-device pose detection analyses 6 biomechanical metrics simultaneously — back angle, knee extension, hip rocking, symmetry and more.',
      },
      {
        title: 'Virtual CdA Tracking',
        desc: "Estimates your frontal surface area in real time as you ride. See exactly how position changes translate to aerodynamic drag — no wind tunnel needed.",
      },
      {
        title: 'Smart Trainer Integration',
        desc: 'Connect any ANT+/BLE trainer via Bluetooth. Power, cadence, and Normalized Power stream live alongside your posture metrics in a single view.',
      },
      {
        title: 'Collapse Point Detection',
        desc: 'Pinpoints the exact minute your form starts to break down. After your ride, a personalised recovery plan targets the specific weakness the AI detected.',
      },
      {
        title: 'Strava Highlight Video',
        desc: 'Exports a 10-second neon-skeleton highlight reel as an H.264 MP4 formatted for direct Strava attachment — share your best moments instantly.',
      },
      {
        title: 'Session History & Trends',
        desc: 'Every session is stored locally. Track form score, average CdA, aero time, and power trends over weeks to validate your training progression.',
      },
    ],

    // How It Works
    howLabel: 'How It Works',
    howHeadlineGradient: 'under 60 seconds.',
    howHeadline: 'Set up in',
    howSub: 'No wearables. No calibration wizard. No subscription. Just you, your bike, and your phone.',
    steps: [
      {
        title: 'Mount & Position',
        desc: 'Place your phone 2–3 metres from your bike in a stable position so your full profile is visible. The AI automatically calibrates to your body and camera angle — no manual setup required.',
      },
      {
        title: 'Ride & Receive Live Coaching',
        desc: "Start pedalling and the skeleton overlay appears in real time. The AI audibly alerts you when your form degrades — so you can focus on the ride, not the screen.",
      },
      {
        title: 'Review & Improve',
        desc: 'After your session, see your Form Score, collapse point, Virtual CdA trend, and a personalised recovery exercise targeting your weakest metric. Share a highlight reel to Strava.',
      },
    ],

    // Screenshots
    screenshotsLabel: 'Screenshots',
    screenshotsHeadline: 'See it in action.',
    screenshots: [
      { caption: 'Live session with skeleton overlay' },
      { caption: 'Real-time metrics dashboard' },
      { caption: 'Session analysis & form score' },
      { caption: 'Virtual CdA trend chart' },
      { caption: 'Session history & progress' },
    ],

    // CTA
    ctaBadge: 'Free to download',
    ctaHeadline1: 'Start training smarter',
    ctaHeadlineGradient: 'today.',
    ctaSub: 'Join cyclists already using WattPose to nail their position, track their CdA, and get stronger every session.',
    ctaDownload: 'Download on the',
    ctaAppStore: 'App Store',
    ctaPlatform: 'Available for iPhone · iOS 16+ · 100% on-device AI',

    // Footer
    footerContact: 'Contact',
    footerBug: 'Report a Bug',
  },

  de: {
    // Navbar
    navFeatures: 'Funktionen',
    navHowItWorks: 'So funktioniert\'s',
    navScreenshots: 'Screenshots',
    navDownload: 'Kostenlos laden',

    // Hero
    heroBadge: 'Echtzeit-KI auf deinem Smartphone',
    heroHeadline1: 'Dein KI-',
    heroHeadlineGradient: 'Bike-Position-Coach',
    heroHeadline2: 'immer dabei.',
    heroSub: 'WattPose verwandelt deine Handykamera in einen professionellen Cycling-Coach. Sofortiges Haltungs-Feedback, virtuelles CdA-Tracking, Erschöpfungserkennung – alles lokal auf dem Gerät. Kein Wearable nötig.',
    heroCtaDownload: 'Laden im',
    heroCtaAppStore: 'App Store',
    heroCtaHowItWorks: 'So funktioniert\'s',
    heroProof1: 'Kostenlos laden',
    heroProof2: '100 % On-Device-KI',
    heroProof3: 'Kein Wearable nötig',
    heroScroll: 'Scrollen zum Entdecken',

    // Stats
    stat1Label: 'Biomechanische Metriken live verfolgt',
    stat2Label: 'On-Device-KI-Posenerkennung',
    stat3Label: 'Highlight-Clip pro Session',
    stat4Label: 'On-Device – deine Daten bleiben auf dem Handy',

    // Features
    featuresLabel: 'Funktionen',
    featuresHeadline1: 'Finde deine',
    featuresHeadlineGradient: 'perfekte Position',
    featuresHeadline2: 'auf dem Rad.',
    featuresSub: 'WattPose analysiert deine Körperhaltung in Echtzeit und hilft dir, Session für Session die optimale Position zu finden – direkt beim Training auf deinem Smartphone.',
    features: [
      {
        title: 'Echtzeit-KI-Analyse',
        desc: 'On-Device-Posenerkennung mit 15 FPS analysiert gleichzeitig 6 biomechanische Metriken – Rückenwinkel, Kniestreckung, Hüftwippen, Symmetrie und mehr.',
      },
      {
        title: 'Virtuelles CdA-Tracking',
        desc: 'Schätzt deine Stirnfläche in Echtzeit während der Fahrt. Sieh genau, wie Positionsänderungen den Luftwiderstand beeinflussen – ganz ohne Windkanal.',
      },
      {
        title: 'Smart-Trainer-Integration',
        desc: 'Verbinde jeden ANT+/BLE-Trainer per Bluetooth. Leistung, Kadenz und normalisierte Leistung werden live neben deinen Haltungsmetriken angezeigt.',
      },
      {
        title: 'Kollaps-Punkt-Erkennung',
        desc: 'Erkennt genau die Minute, in der deine Form nachlässt. Nach der Einheit liefert ein personalisierter Erholungsplan gezielte Übungen für die schwächste Stelle.',
      },
      {
        title: 'Strava Highlight-Video',
        desc: 'Exportiert einen 10-Sekunden-Neon-Skelett-Clip als H.264-MP4 im richtigen Format für Strava – teile deine besten Momente sofort.',
      },
      {
        title: 'Sessionverlauf & Trends',
        desc: 'Jede Session wird lokal gespeichert. Verfolge Form-Score, Durchschnitts-CdA, Aero-Zeit und Leistungstrends über Wochen, um deinen Trainingsfortschritt zu bestätigen.',
      },
    ],

    // How It Works
    howLabel: 'So funktioniert\'s',
    howHeadline: 'Einrichtung in',
    howHeadlineGradient: 'unter 60 Sekunden.',
    howSub: 'Kein Wearable. Kein Kalibrierungsassistent. Kein Abo. Nur du, dein Rad und dein Handy.',
    steps: [
      {
        title: 'Aufstellen & Positionieren',
        desc: 'Stelle dein Handy 2–3 Meter vom Rad entfernt auf, sodass dein vollständiges Profil sichtbar ist. Die KI kalibriert automatisch auf deinen Körper und den Kamerawinkel – kein manuelles Setup nötig.',
      },
      {
        title: 'Fahren & Live-Coaching erhalten',
        desc: 'Tritt in die Pedale und das Skelett-Overlay erscheint in Echtzeit. Die KI gibt dir akustische Hinweise, wenn deine Form nachlässt – du kannst dich voll auf die Fahrt konzentrieren.',
      },
      {
        title: 'Auswerten & Verbessern',
        desc: 'Sieh nach der Session deinen Form-Score, den Kollaps-Punkt, den CdA-Verlauf und eine personalisierte Erholungsübung für deine schwächste Metrik. Teile einen Highlight-Clip auf Strava.',
      },
    ],

    // Screenshots
    screenshotsLabel: 'Screenshots',
    screenshotsHeadline: 'Sieh es in Aktion.',
    screenshots: [
      { caption: 'Live-Session mit Skelett-Overlay' },
      { caption: 'Echtzeit-Metriken-Dashboard' },
      { caption: 'Session-Analyse & Form-Score' },
      { caption: 'Virtueller CdA-Trendchart' },
      { caption: 'Sessionverlauf & Fortschritt' },
    ],

    // CTA
    ctaBadge: 'Kostenlos laden',
    ctaHeadline1: 'Trainiere jetzt smarter –',
    ctaHeadlineGradient: 'noch heute.',
    ctaSub: 'Schließe dich Radfahrern an, die WattPose bereits nutzen, um ihre Position zu optimieren, ihr CdA zu tracken und jede Session stärker zu werden.',
    ctaDownload: 'Laden im',
    ctaAppStore: 'App Store',
    ctaPlatform: 'Für iPhone · iOS 16+ · 100 % On-Device-KI',

    // Footer
    footerContact: 'Kontakt',
    footerBug: 'Fehler melden',
  },
} as const

export type Translations = typeof translations['en']
