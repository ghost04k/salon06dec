import { useState } from 'react';
import './App.css';

/* FLYERS */
import Flyer1 from './assets/flyer1.jpg';
import Flyer2 from './assets/flyer2.jpg';
import Flyer3 from './assets/flyer3.jpg';
import Flyer4 from './assets/flyer4.jpg';
import Flyer5 from './assets/flyer5.jpg';
import Flyer6 from './assets/flyer6.jpg';

/* CASE CLIENT MAP */
import MayaMap from './assets/maya-map.png';

/* REALISATIONS — PRODUITS */
import Madame1 from './assets/madame1.jpg';
import Madame2 from './assets/madame2.jpg';
import Madame3 from './assets/madame3.jpg';
import Madame4 from './assets/madame4.jpg';
import Madame5 from './assets/madame5.jpg';
import Madame6 from './assets/madame6.jpg';
import Madame7 from './assets/madame7.jpg';

/* REALISATIONS — MODELES */
import Model1 from './assets/model1.jpg';
import Model2 from './assets/model2.jpg';
import Model3 from './assets/model3.jpg';
import Model4 from './assets/model4.jpg';

function App() {
  // 🔗 Lien WhatsApp
  const whatsappNumber = '33624637237';
  const whatsappMessage =
    'Bonjour, je suis intéressé par vos packs pour le salon du 6 décembre 🙂';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // 🔍 LIGHTBOX STATE
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  // 🔽 NAV MOBILE
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openLightbox = (img, list) => {
    setCurrentImage(img);
    setImageList(list);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    if (!imageList.length) return;
    const index = imageList.indexOf(currentImage);
    const next = (index + 1) % imageList.length;
    setCurrentImage(imageList[next]);
  };

  const prevImage = () => {
    if (!imageList.length) return;
    const index = imageList.indexOf(currentImage);
    const prev = (index - 1 + imageList.length) % imageList.length;
    setCurrentImage(imageList[prev]);
  };

  // utilitaire : quand on clique sur un lien de nav sur mobile, on referme le menu
  const handleNavClick = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsNavOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header className="topbar">
        <div className="topbar-left">
          <div className="topbar-logo">GOAT SIDE x BIL’ART</div>

          <button
            type="button"
            className={`burger ${isNavOpen ? 'is-open' : ''}`}
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`topbar-nav ${isNavOpen ? 'is-open' : ''}`}>
          <a href="#packs" onClick={() => handleNavClick('#packs')}>
            Packs
          </a>
          <a href="#sites" onClick={() => handleNavClick('#sites')}>
            Sites & SEO
          </a>
          <a href="#case" onClick={() => handleNavClick('#case')}>
            Cas client
          </a>
          <a href="#flyers" onClick={() => handleNavClick('#flyers')}>
            Flyers
          </a>
          <a href="#realisations" onClick={() => handleNavClick('#realisations')}>
            Réalisations
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            onClick={() => setIsNavOpen(false)}
          >
            Réserver
          </a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="page">
        {/* HERO */}
        <section className="hero">
          <div className="badge">Salon du 06 Décembre – Lyon</div>

          <h1 className="hero-title">
            Contenu pro & stylé <br /> pour exposants ambitieux
          </h1>

          <p className="hero-icons">
            📸 Photos · 🎥 Vidéos · 🎨 Flyers · 🌐 Sites Web · 🔍 SEO local
          </p>

          <p className="hero-sub">
            Nous créons du contenu qui donne envie de s’arrêter sur votre stand,
            de vous écouter et de vous suivre.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="cta-hero"
          >
            Réserver votre créneau WhatsApp
          </a>
        </section>

        {/* PACKS */}
        <section id="packs" className="section">
          <div className="section-head">
            <h2>Nos Packs Salon</h2>
            <p>Sélectionnez la formule la plus adaptée à vos besoins.</p>
          </div>

          <div className="cards-scroll">
            {/* PACK ESSENTIEL */}
            <article className="card pack-card">
              <div className="pack-header">
                <span className="pack-icon">🎯</span>
                <h3 className="pack-title">Pack Essentiel</h3>
                <p className="pack-price">80 €</p>
              </div>

              <p className="pack-desc">
                Pour présenter rapidement votre marque avec du contenu pro.
              </p>

              <ul className="pack-list">
                <li>5 photos professionnelles</li>
                <li>Mini interview (30–45 sec)</li>
                <li>Vidéo optimisée Instagram / TikTok</li>
                <li>Livraison : 24–48h</li>
              </ul>

              <div className="pack-footer">Durée : 10–15 minutes</div>
            </article>

            {/* PACK PREMIUM */}
            <article className="card pack-card pack-popular">
              <div className="pack-badge">Le plus choisi</div>

              <div className="pack-header">
                <span className="pack-icon">🎬</span>
                <h3 className="pack-title">Pack Premium</h3>
                <p className="pack-price">100 €</p>
              </div>

              <p className="pack-desc">
                Le meilleur rapport qualité / prix pour un rendu complet.
              </p>

              <ul className="pack-list">
                <li>10 photos HD</li>
                <li>Vidéo 1min – 1min30</li>
                <li>Interview + plans cinématiques</li>
                <li>Flyer personnalisé</li>
              </ul>

              <div className="pack-footer">Idéal : mode, beauté, food</div>
            </article>

            {/* PACK BOOST */}
            <article className="card pack-card pack-boost">
              <div className="pack-header">
                <span className="pack-icon">🚀</span>
                <h3 className="pack-title">Business Boost</h3>
                <p className="pack-price">180 €</p>
              </div>

              <p className="pack-desc">
                Le pack ultime pour exposants ambitieux.
              </p>

              <ul className="pack-list">
                <li>15 photos HD</li>
                <li>2 vidéos verticales</li>
                <li>Interview longue (2 min)</li>
                <li>Vidéo style pub</li>
                <li>Flyer Premium + QR code</li>
              </ul>

              <div className="pack-footer">Prêt à publier</div>
            </article>

            {/* PACK BRAND UPGRADE */}
            <article className="card pack-card pack-strategy">
              <div className="pack-header">
                <span className="pack-icon">🧠</span>
                <h3 className="pack-title">Pack Brand Upgrade</h3>
                <p className="pack-price">260 €</p>
              </div>

              <p className="pack-desc">
                Pour revoir toute votre image et votre stratégie de contenu.
              </p>

              <ul className="pack-list">
                <li>Audit complet de vos réseaux & site</li>
                <li>Moodboard + mini charte graphique</li>
                <li>3–5 templates de posts</li>
                <li>Optimisation bio & highlights</li>
                <li>Call (45 min) + 2 semaines de suivi</li>
              </ul>

              <div className="pack-footer">Idéal pour les marques en construction</div>
            </article>
          </div>

          <div className="offer">
            ⚡ 1 portrait offert pour les 5 premiers exposants !
          </div>
        </section>

        {/* SITES + SEO */}
        <section id="sites" className="section">
          <div className="section-head">
            <h2>Accompagnement digital</h2>
            <p>Sites web, SEO local et image de marque.</p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <h3>🌐 Sites Web Professionnels</h3>
              <p className="service-sub">
                Des sites modernes & rapides pensés pour convertir.
              </p>

              <ul>
                <li>Site vitrine</li>
                <li>One Page</li>
                <li>Site food / boutique</li>
                <li>Portfolio créatif</li>
              </ul>

              <div className="service-tag">Tarifs Salon</div>
            </article>

            <article className="service-card">
              <h3>🔍 SEO Local</h3>
              <p className="service-sub">Gagnez en visibilité sur Google & Maps.</p>

              <ul>
                <li>Optimisation site web</li>
                <li>Google Business</li>
                <li>SEO local par activité</li>
                <li>Stratégie avis clients</li>
              </ul>

              <div className="service-tag">+30 clients accompagnés</div>
            </article>
          </div>
        </section>

        {/* CAS CLIENT */}
        <section id="case" className="section">
          <div className="section-head">
            <h2>Cas client — SEO Local</h2>
            <p>Maya-boutique (épicerie africaine)</p>
          </div>

          <div className="case-layout">
            <div className="case-text">
              <div className="case-badge">Référencement Google Maps</div>

              <h3>1ère position locale</h3>

              <ul>
                <li>Optimisation Google Business</li>
                <li>Ajout de photos pro</li>
                <li>Description optimisée</li>
                <li>Stratégie avis clients</li>
              </ul>

              <div className="case-metrics">
                <span className="case-tag">⭐ 4,7 / 5</span>
                <span className="case-tag">+ 50 avis</span>
                <span className="case-tag">1ère position</span>
              </div>

              <p className="case-result">
                Résultat : + de visibilité, + de visites, + de ventes.
              </p>
            </div>

            <div className="case-img">
              <img
                src={MayaMap}
                className="case-img-real"
                alt="Maya Boutique"
                onClick={() => openLightbox(MayaMap, [MayaMap])}
              />
            </div>
          </div>
        </section>

        {/* FLYERS */}
        <section id="flyers" className="section">
          <div className="section-head">
            <h2>Exemples de flyers</h2>
          </div>

          <div className="flyer-grid">
            {[Flyer1, Flyer2, Flyer3, Flyer4, Flyer5, Flyer6].map(
              (img, i, arr) => (
                <img
                  key={i}
                  src={img}
                  className="flyer"
                  alt={`flyer ${i + 1}`}
                  onClick={() => openLightbox(img, arr)}
                />
              )
            )}
          </div>
        </section>

        {/* REALISATIONS */}
        <section id="realisations" className="section">
          <div className="section-head">
            <h2>Réalisations photo</h2>
            <p>Produits & shooting marque.</p>
          </div>

          <h3 className="sub-section-title">📦 Packshot & produits</h3>
          <div className="work-grid">
            {[Madame1, Madame2, Madame3, Madame4, Madame5, Madame6, Madame7].map(
              (img, i, arr) => (
                <img
                  key={i}
                  src={img}
                  className="work-img"
                  alt="packshot"
                  onClick={() => openLightbox(img, arr)}
                />
              )
            )}
          </div>

          <h3 className="sub-section-title">👩🏾‍🦱 Marque & modèle</h3>
          <div className="work-grid">
            {[Model1, Model2, Model3, Model4].map((img, i, arr) => (
              <img
                key={i}
                src={img}
                className="work-img"
                alt="model"
                onClick={() => openLightbox(img, arr)}
              />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="section-head">
            <h2>Contact</h2>
            <p>Réservez votre créneau pour le salon.</p>
          </div>

          <div className="block contact-block">
            <ul>
              <li>📞 WhatsApp : +33 6 24 63 72 37</li>
              <li>📍 Lyon</li>
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="cta-btn"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </section>

        <footer className="footer">
          © 2025 GOAT SIDE x BIL’ART — Tous droits réservés
        </footer>
      </main>

      {/* LIGHTBOX OVERLAY */}
      {lightboxOpen && currentImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img
            src={currentImage}
            className="lightbox-img"
            alt="Zoom"
            onClick={(e) => e.stopPropagation()}
          />

          {imageList.length > 1 && (
            <>
              <button
                className="lightbox-btn left"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                ‹
              </button>
              <button
                className="lightbox-btn right"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                ›
              </button>
            </>
          )}

          <button
            className="lightbox-close"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

export default App;