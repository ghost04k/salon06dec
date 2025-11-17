import { useState, useRef } from "react";
import "./App.css";

/* FLYERS */
import Flyer1 from "./assets/flyer1.jpg";
import Flyer2 from "./assets/flyer2.jpg";
import Flyer3 from "./assets/flyer3.jpg";
import Flyer4 from "./assets/flyer4.jpg";
import Flyer5 from "./assets/flyer5.jpg";
import Flyer6 from "./assets/flyer6.jpg";

/* CASE CLIENT MAP */
import MayaMap from "./assets/maya-map.png";

/* REALISATIONS — PRODUITS */
import Madame1 from "./assets/madame1.jpg";
import Madame2 from "./assets/madame2.jpg";
import Madame3 from "./assets/madame3.jpg";
import Madame4 from "./assets/madame4.jpg";
import Madame5 from "./assets/madame5.jpg";
import Madame6 from "./assets/madame6.jpg";
import Madame7 from "./assets/madame7.jpg";

/* REALISATIONS — MODELES */
import Model1 from "./assets/model1.jpg";
import Model2 from "./assets/model2.jpg";
import Model3 from "./assets/model3.jpg";
import Model4 from "./assets/model4.jpg";

import html2canvas from "html2canvas";

import InstaIcon from "./assets/insta.svg";
import PhoneIcon from "./assets/phone.svg";

function App() {
  // 🔗 WhatsApp
  const whatsappNumber = "33624637237";
  const whatsappMessage =
    "Bonjour, je suis intéressé par vos packs pour le salon du 6 décembre 🙂";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // 🔍 Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  // Menu mobile (burger)
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen((v) => !v);
  const closeNav = () => setNavOpen(false);

  // 🎴 Générateur de carte salon
  const [cardData, setCardData] = useState({
    brand: "",
    stand: "",
    instagram: "",
    phone: "",
  });

  // const [cardFlipped, setCardFlipped] = useState(false);
  // const cardRef = useRef(null);


const [cardFlipped, setCardFlipped] = useState(false);
const cardRef = useRef(null);      // pour la carte 3D (aperçu si tu veux)
//const exportRef = useRef(null);    // 🔥 pour la carte d’export (plate)

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCardFlip = () => setCardFlipped((v) => !v);

const handleDownloadCard = async () => {
  if (!cardRef.current) return;

  // Empêche un champ du formulaire d'être sélectionné
  document.activeElement.blur();

  try {
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
    });

    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    const cleanBrand = (cardData.brand || "carte-salon")
      .toLowerCase()
      .replace(/\s+/g, "-");

    link.href = dataURL;
    link.download = `${cleanBrand}-salon.png`;
    link.click();
  } catch (err) {
    console.error("Erreur :", err);
  }
};

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

  const flyerImages = [Flyer1, Flyer2, Flyer3, Flyer4, Flyer5, Flyer6];
  const packshotImages = [
    Madame1,
    Madame2,
    Madame3,
    Madame4,
    Madame5,
    Madame6,
    Madame7,
  ];
  const modelImages = [Model1, Model2, Model3, Model4];

  // Valeurs affichées (fallback si vide)
  const displayBrand = cardData.brand || "Nom de votre marque";
  const displayStand = cardData.stand || ":";
  const displayInsta = cardData.instagram || "@votre.instagram";
  const displayPhone = cardData.phone || "+33 6 XX XX XX XX";

  return (
    <>
      {/* HEADER */}
      <header className="topbar">
        <div className="topbar-left">
          <div className="topbar-logo">GOAT SIDE X BIL’ART</div>

          {/* Burger visible uniquement sur mobile (CSS) */}
          <button
            type="button"
            className={`burger ${navOpen ? "is-open" : ""}`}
            onClick={toggleNav}
            aria-label="Ouvrir le menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* NAV */}
        <nav className={`topbar-nav ${navOpen ? "is-open" : ""}`}>
          <a href="#packs" onClick={closeNav}>
            Packs
          </a>
          <a href="#sites" onClick={closeNav}>
            Sites & SEO
          </a>
          <a href="#case" onClick={closeNav}>
            Cas client
          </a>
          <a href="#flyers" onClick={closeNav}>
            Flyers
          </a>
          <a href="#realisations" onClick={closeNav}>
            Réalisations
          </a>
          <a href="#card-generator" onClick={closeNav}>
            Carte salon
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            onClick={closeNav}
          >
            Réserver
          </a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="page">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="badge">Salon du 06 Décembre – Lyon</div>

          <h1 className="hero-title">
            Contenu pro & stylé <br />
            pour exposants ambitieux
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
            {/* ESSENTIEL */}
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

            {/* PREMIUM */}
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

            {/* BOOST */}
            <article className="card pack-card pack-boost">
              <div className="pack-header">
                <span className="pack-icon">🚀</span>
                <h3 className="pack-title">Business Boost</h3>
                <p className="pack-price">180 €</p>
              </div>

              <p className="pack-desc">Le pack ultime pour exposants ambitieux.</p>

              <ul className="pack-list">
                <li>15 photos HD</li>
                <li>2 vidéos verticales</li>
                <li>Interview longue (2 min)</li>
                <li>Vidéo style pub</li>
                <li>Flyer Premium + QR code</li>
              </ul>

              <div className="pack-footer">Prêt à publier</div>
            </article>

            {/* BRAND UPGRADE */}
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

        {/* SITES + SEO + BRANDING */}
        <section id="sites" className="section">
          <div className="section-head">
            <h2>Accompagnement digital</h2>
            <p>Sites web, SEO local et identité de marque.</p>
          </div>

          <div className="services-grid">
            {/* SITES WEB */}
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

            {/* SEO LOCAL */}
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

            {/* BRANDING / LOGO */}
            <article className="service-card">
              <h3>🎨 Logo & identité visuelle</h3>
              <p className="service-sub">
                Une image de marque cohérente, pro et mémorable.
              </p>

              <ul>
                <li>Création ou refonte de logo</li>
                <li>Palette couleurs & typographies</li>
                <li>Mini charte graphique PDF</li>
                <li>Déclinaisons pour réseaux & flyers</li>
              </ul>

              <div className="service-tag">Pack spécial exposants</div>
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
       {/* FLYERS */}
<section id="flyers" className="section">
  <div className="section-head">
    <h2>Exemples de flyers</h2>
  </div>

  <div className="flyer-grid">
    {/* 3 premiers flyers seulement */}
    {flyerImages.slice(0, 3).map((img, i) => (
      <img
        key={i}
        src={img}
        className="flyer"
        alt={`flyer ${i + 1}`}
        onClick={() => openLightbox(img, flyerImages)} // 👉 on passe TOUTE la liste
      />
    ))}

    {/* Carte "voir plus" */}
    {flyerImages.length > 3 && (
      <button
        type="button"
        className="see-more-card"
        onClick={() => openLightbox(flyerImages[0], flyerImages)}
      >
        Voir tous les flyers
      </button>
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
            {packshotImages.slice(0, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                className="work-img"
                alt="packshot"
                onClick={() => openLightbox(img, packshotImages)}
              />
            ))}

            {packshotImages.length > 3 && (
              <button
                type="button"
                className="see-more-card"
                onClick={() => openLightbox(packshotImages[0], packshotImages)}
              >
                Voir plus de produits
              </button>
            )}
          </div>

          <h3 className="sub-section-title">👩🏾‍🦱 Marque & modèle</h3>
          <div className="work-grid">
            {modelImages.slice(0, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                className="work-img"
                alt="model"
                onClick={() => openLightbox(img, modelImages)}
              />
            ))}

  {modelImages.length > 3 && (
    <button
      type="button"
      className="see-more-card"
      onClick={() => openLightbox(modelImages[0], modelImages)}
    >
      Voir plus de modèles
    </button>
  )}
</div>
        </section>

       {/* 🎴 GENERATEUR DE CARTE SALON — JUSTE AVANT CONTACT */}
{/* 🎴 GENERATEUR DE CARTE SALON — JUSTE AVANT CONTACT */}
<section id="card-generator" className="section">
  <div className="section-head">
    <h2>Crée ta carte salon gratuite</h2>
    <p>
      Remplis tes infos, télécharge ta carte et partage-la sur tes réseaux.
    </p>
  </div>

  <div className="gc-layout">
    {/* FORMULAIRE */}
    <form
      className="gc-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="gc-field">
        <span>Nom de la marque</span>
        <input
          type="text"
          name="brand"
          placeholder="Ex : Maya Boutique"
          value={cardData.brand}
          onChange={handleCardChange}
        />
      </label>

      <label className="gc-field">
        <span>Numéro de stand</span>
        <input
          type="text"
          name="stand"
          placeholder="Ex : 013"
          value={cardData.stand}
          onChange={handleCardChange}
        />
      </label>

      <label className="gc-field">
        <span>Instagram (optionnel)</span>
        <input
          type="text"
          name="instagram"
          placeholder="@ton.compte"
          value={cardData.instagram}
          onChange={handleCardChange}
        />
      </label>

      <label className="gc-field">
        <span>WhatsApp / téléphone (optionnel)</span>
        <input
          type="text"
          name="phone"
          placeholder="+33 6 XX XX XX XX"
          value={cardData.phone}
          onChange={handleCardChange}
        />
      </label>

      <p className="gc-tip">
        👉 Clique sur la carte pour voir le recto / verso, puis télécharge le
        visuel en PNG.
      </p>

      <button
        type="button"
        className="gc-download-btn"
        onClick={handleDownloadCard}
      >
        Télécharger la carte (.png)
      </button>
      <p className="gc-download-hint">
        Une fois téléchargée, partage-la en story, WhatsApp, newsletter, etc.
      </p>
    </form>

    {/* 🔥 VERSION EXPORT (PLATE, CACHÉE POUR html2canvas) */}
    {/* <div className="gc-export" ref={exportRef}>
      <div className="gc-export-row">
        
        <div className="gc-export-face gc-export-front">
          <div className="gc-front-top">
            <div>
              <p className="gc-label">Carte salon 2025</p>
              <h3 className="gc-title">{displayBrand}</h3>
            </div>
            <span className="gc-badge">Lyon · 06 Déc.</span>
          </div>

          <div className="gc-front-middle">
            <p className="gc-stand">
              Stand <span>{displayStand}</span>
            </p>     
            <p className="gc-front-phrase">
              Retrouve-nous au Marché de fin d’année
            </p>
          </div>

          <div className="gc-front-bottom">
            <span className="gc-info">
              <img src={InstaIcon} alt="Instagram" className="gc-icon-img" />
              {displayInsta}
            </span>
            <span className="gc-info">
              <img src={PhoneIcon} alt="Téléphone" className="gc-icon-img" />
              {displayPhone}
            </span>
          </div>
        </div>

      
        <div className="gc-export-face gc-export-back">
          <p className="gc-label">Coordonnées</p>

          <div className="gc-back-block">
            <p className="gc-back-line">
              👤 <span>{displayBrand}</span>
            </p>
            <p className="gc-back-line">
              📍 Stand <span>{displayStand}</span>
            </p>
            <p className="gc-back-line">
              <span className="gc-icon-row">
                <img
                  src={PhoneIcon}
                  alt="Téléphone"
                  className="gc-icon-img"
                />
                <span>{displayPhone}</span>
              </span>
            </p>
            <p className="gc-back-line">
              <span className="gc-icon-row">
                <img
                  src={InstaIcon}
                  alt="Instagram"
                  className="gc-icon-img"
                />
                <span>{displayInsta}</span>
              </span>
            </p>
          </div>

          <p className="gc-back-footer">
            Guide : retourne la carte pour voir le verso · Download = prêt à
            partager.
          </p>
        </div>
      </div>
    </div> */}

    {/* PREVIEW 3D (FLIP AU CLIC) */}
    <div className="gc-preview">
      <div className="gc-scene">
        <div
          className={`gc-card ${cardFlipped ? "is-flipped" : ""}`}
          onClick={toggleCardFlip}
          ref={cardRef}
        >
          {/* RECTO 3D */}
          <div className="gc-face gc-front">
            <div className="gc-strip" />
            <div className="gc-chip" />

            <div className="gc-front-top">
              <div>
                <p className="gc-label">Carte salon 2025</p>
                <h3 className="gc-title">{displayBrand}</h3>
              </div>
              <span className="gc-badge">Lyon · 06 Déc.</span>
            </div>

            <div className="gc-front-middle">
              <p className="gc-stand">
                Stand <span>{displayStand}</span>
              </p>
              <p className="gc-front-phrase">
              Retrouve-nous au Marché de fin d’année 
            </p>
            </div>

            <div className="gc-front-bottom">
              <span className="gc-info">
                <span className="gc-insta-dot" />
                {displayInsta.startsWith("@") ? displayInsta : `@${displayInsta}`}
              </span>
              <span className="gc-info">
                <img src={PhoneIcon} alt="Téléphone" className="gc-icon-img" />
                {displayPhone}
              </span>
            </div>
          </div>

          {/* VERSO 3D */}
          {/* <div className="gc-face gc-back">
            <div className="gc-back-gradient" />

            <p className="gc-label">Coordonnées</p>

            <div className="gc-back-block">
              <p className="gc-back-line">
                👤 <span>{displayBrand}</span>
              </p>
              <p className="gc-back-line">
                📍 Stand <span>{displayStand}</span>
              </p>
              <p className="gc-back-line">
                <span className="gc-icon-row">
                  <img
                    src={PhoneIcon}
                    alt="Téléphone"
                    className="gc-icon-img"
                  />
                  <span>{displayPhone}</span>
                </span>
              </p>
              <p className="gc-back-line">
                <span className="gc-icon-row">
                  <img
                    src={InstaIcon}
                    alt="Instagram"
                    className="gc-icon-img"
                  />
                  <span>{displayInsta}</span>
                </span>
              </p>
            </div>

            <p className="gc-back-footer">
              Clique pour retourner la carte · Download = prêt à partager.
            </p>
          </div> */}
        </div>
      </div>
    </div>
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

      {/* LIGHTBOX */}
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