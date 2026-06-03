import React, { useState, useEffect } from 'react';
import './EpkPage.scss';

export const EpkPage = () => {
  const [openSections, setOpenSections] = useState({
    bio: false,
    note: false,
    pr: false,
  });

  useEffect(() => {
    // Примусово піднімаємо контейнер до верху при завантаженні сторінки
    const wrapper = document.querySelector('.epk-wrapper');
    if (wrapper) wrapper.scrollTop = 0;
  }, []);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="epk-wrapper">
      <nav className="epk-nav">
        <div className="nav-inner">
          <a href="#stream">Стрімінг</a>
          <a href="#bio">Біо</a>
          <a href="#press">Прес-реліз</a>
          <a href="#media">Посилання</a>
          <a href="#contacts">Контакти</a>
          <a 
            href="https://belletriq.com/disantrefact" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-release-link"
          >
            ↗ Release Link (Запрацює в день релізу)
          </a>
        </div>
      </nav>

      {/* SECTION STREAM */}
      <section className="epk-section" id="stream">
        <div className="epk-container">
          <div className="player-wrap">
            <iframe 
              style={{ borderRadius: '24px', display: 'block' }} 
              src="https://untitled.stream/embed/H3xSaOijozAe" 
              width="100%" 
              height="344" 
              allowFullScreen 
              allow="picture-in-picture" 
              frameBorder="0" 
              loading="lazy"
              title="Streaming Player"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SECTION BIO & ABOUT */}
      <section className="epk-section" id="bio">
        <div className="epk-container two-col">
          {/* BIO CARD */}
          <div className="epk-card">
            <div className="card-title">Біо</div>
            <p className="text-short">
              Cutmylips — український電子ний музикант та саунд-продюсер із Донецька. Натхненний творчістю Flume, James Blake, Cashmere Cat та Son Lux, він створює музику, де складний саунд-дизайн, футуристична електроніка й поп-мелодії працюють у зв'язці, а не суперечать одне одному. Його творчий концепт вкладається в просту формулу: «Too cheesy for underground, too sophisticated for pop».
            </p>
            <button className={`epk-toggle ${openSections.bio ? 'open' : ''}`} onClick={() => toggleSection('bio')}>
              <span className="arrow">▼</span>
              <span>{openSections.bio ? 'Згорнути' : 'Читати повністю'}</span>
            </button>
            <div className={`text-long ${openSections.bio ? 'open' : ''}`}>
              <p>Свою музичну кар'єру Cutmylips почав ще у 2009 році в рідному Донецьку. Крізь діджей-сети, техно, захоплення саунд-дизайном, future beats та IDM він поступово прийшов до власного бачення музики, в якому експеримент і доступність не суперечать одне одному.</p>
              <p>Протягом останніх десяти років український продюсер створював музику для Adidas, Coca-Cola, Foster+Partners, Specialized та Setanta, а також встиг попрацювати з усіма представниками музичної «великої трійки» — Warner, Sony та Universal. У 2020 році разом з Inodi (fka Kulakostas) заснував продакшн-компанію / лейбл Belletriq, де продовжує працювати як над комерційними проєктами, так і над випуском музичних релізів.</p>
              <p>Паралельно з комерційною діяльністю Cutmylips шукав власний впізнаваний саунд. У якийсь момент він усвідомив, що поп-музика не є антагоністом андеграунду — навпаки, вони можуть підсилювати одна одну. Саме ця ідея стала фундаментом його творчості.</p>
              <p>Натхненний Flume, James Blake, Cashmere Cat, Son Lux та сучасною електронною сценою, Cutmylips створює треки, в яких крізь складніskles конструкції IDM, click & cuts, bass music та електроніки завжди пробивається сильна мелодія. Його ранні релізи виходили на незалежних іноземних лейблах, зокрема Secret Songs — імпринті канадського музиканта Ryan Hemsworth.</p>
            </div>
          </div>

          {/* ABOUT ALBUM CARD */}
          <div className="epk-card">
            <div className="card-title">Про альбом</div>
            <p className="text-short">
              «DISANTREFACT» — другий альбом Cutmylips та найбільш масштабна робота артиста на сьогодні. Назва — вигадане стоп-слово: використай його, коли хочеш зупинити час, згорнути простір або змінити тему. 25 треків складаються у футуристичну аудіоподорож між індітронікою, попом, IDM, глітчем та електронікою без жанрових кордонів.
            </p>
            <button className={`epk-toggle ${openSections.note ? 'open' : ''}`} onClick={() => toggleSection('note')}>
              <span className="arrow">▼</span>
              <span>{openSections.note ? 'Згорнути' : 'Детальніше'}</span>
            </button>
            <div className={`text-long ${openSections.note ? 'open' : ''}`}>
              <p>Музично «DISANTREFACT» побудований на контрастах: легке та важке, танцювальне й експериментальне, синтетичне та органічне, емоційне й відсторонене.</p>
              <p>Альбом звучить як саундтрек до життя у 2026 році: тривожний, красивий, перевантажений інформацією і водночас дуже людяний.</p>
              <p>Сторітелінг альбому, побудований за тропом Voyage & Return, з одного боку є автобіографічним, а з іншого — дарує слухачеві трансформуючий досвід. Тут вистачає моментів, дропів і сюжетних твістів, гідних реакції: «Я такого ще не чув».</p>
              <p>«DISANTREFACT» сподобається як прихильникам FKA twigs, Oklou, Arca та SOPHIE, так і слухачам Flume, Röyksopp, TOKiMONSTA, Flying Lotus чи сучасної індітроніки загалом.</p>
              <p><em>«DISANTREFACT — це стоп-слово, яке можна використати тоді, коли хочеться зупинити час, згорнути простір або змінити тему.»</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PRESS RELEASE */}
      <section className="epk-section" id="press">
        <div className="epk-container">
          <div className="epk-card">
            <div className="card-title">Прес-реліз</div>
            <p className="text-short">
              Винахідлива індітроніка, глітчі та футуристичний поп на новом альбомі українського продюсера Cutmylips. Лонгплей із 25 треків вражає саунд-дизайном світового рівня.
            </p>
            <button className={`epk-toggle ${openSections.pr ? 'open' : ''}`} onClick={() => toggleSection('pr')}>
              <span className="arrow">▼</span>
              <span>{openSections.pr ? 'Згорнути' : 'Читати повний прес-реліз'}</span>
            </button>
            <div className={`text-long ${openSections.pr ? 'open' : ''}`}>
              <p>«У якийсь момент я усвідомив, що поп-музика не є антагоністом андеграунду; навпаки, вони працюють у зв'язці», — каже український електронний музикант та саунд-продюсер Cutmylips.</p>
              <p>Саме ця ідея лежить в основі «DISANTREFACT» — другого альбому артиста та найбільшої його роботи на сьогодні. Натхненний творчістю Flume, James Blake, Cashmere Cat та Son Lux, Cutmylips створив масштабний 25-трековий реліз, у якому поп-мелодії зустрічаються з футуристичною електронікою, IDM, click & cuts, bass music та складним саунд-дизайном.</p>
              <p>Результат цієї роботи вражає. Не кожного дня можна почути альбом українського електронного артиста, який складається з 25 композицій і при цьому сприймається як цілісна подорож із власною драматургією та логікою розвитку.</p>
              <p>Сторітелінг альбому, побудований за тропом Voyage & Return, з одного боку є автобіографічним, а з іншого — дарує слухачеві трансформуючий досвід. Тут вистачає моментів, дропів і сюжетних твістів, гідних реакції: «Я такого ще не чув».</p>
              <p>«DISANTREFACT» побудований на контрастах: легке та важке, танцювальне й експериментальне, синтетичне та органічне, емоційне й відсторонене. Через ці протилежності Cutmylips створює кінематографічний звуковий світ, який допомагає осмислити реальність, що стає дедалі швидшою, складнішою та перевантаженішою.</p>
              <p>Зрілий артист, який роками відточував майстерність у сфері саунд-дизайну та музичного продакшну, понад годину кружляє голову слухачеві безліччю футуристичних текстур, глітчів, звукових ефектів та дрібних нюансів. Але від надлишку аудіоінформації його музика не втрачає ані груву, ані атмосфери, ані мелодійності, ані хітового потенціалу.</p>
              <p>Назва альбому також є частиною концепції. «DISANTREFACT» — це вигадане стоп-слово, яке можна використати тоді, коли хочеться зупинити час, згорнути простір або змінити тему. Це реакція на момент, коли все навколо стає занадто швидким і непосильним.</p>
              <p>«DISANTREFACT» сподобається як прихильникам FKA twigs, Oklou, Arca та SOPHIE, так і слухачам Flume, Röyksopp, TOKiMONSTA, Flying Lotus чи сучасної індітроніки загалом.</p>
              <p>Така еклектика вкладається в загальний творчий концепт Cutmylips: <strong>«Too cheesy for underground, too sophisticated for pop»</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION MEDIA LINKS */}
      <section className="epk-section" id="media">
        <div className="epk-container">
          <div className="section-title">Соцмережі та стрімінги</div>
          
          <div className="grid3" style={{ marginBottom: '24px' }}>
            <div className="linkbox highlight-pink">
              <div className="lbl">Release Link</div>
              <a href="https://belletriq.com/disantrefact" target="_blank" rel="noopener noreferrer">belletriq.com/disantrefact</a>
            </div>
            <div className="linkbox highlight-blue">
              <div className="lbl">Фото Artwork & Відео</div>
              <a href="https://drive.google.com/drive/folders/1Bqi7aR7nBsM0IIvB8H9Dfc0Sw4NQoqTk?usp=share_link" target="_blank" rel="noopener noreferrer">Google Drive →</a>
            </div>
          </div>

          <div className="grid3">
            <div className="linkbox">
              <div className="lbl">Instagram</div>
              <a href="https://www.instagram.com/cutmylips/" target="_blank" rel="noopener noreferrer">instagram.com/cutmylips</a>
            </div>
            <div className="linkbox">
              <div className="lbl">TikTok</div>
              <a href="https://www.tiktok.com/@cutmylips" target="_blank" rel="noopener noreferrer">tiktok.com/@cutmylips</a>
            </div>
            <div className="linkbox">
              <div className="lbl">Bandcamp</div>
              <a href="https://cutmylips.bandcamp.com" target="_blank" rel="noopener noreferrer">cutmylips.bandcamp.com</a>
            </div>
          </div>

          <div className="grid3" style={{ marginTop: '24px' }}>
            <div className="linkbox">
              <div className="lbl">Spotify</div>
              <a href="https://open.spotify.com/artist/107LVbAcRXB1TBzqo6itz2?si=-9c68CphQAqsVuYy9-K9AA" target="_blank" rel="noopener noreferrer">open.spotify.com/artist/107LVbAcRXB1TBzqo6itz2</a>
            </div>
            <div className="linkbox">
              <div className="lbl">Apple Music</div>
              <a href="https://music.apple.com/us/artist/cutmylips/1057980442" target="_blank" rel="noopener noreferrer">music.apple.com/us/artist/cutmylips/1057980442</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CONTACTS */}
      <section className="epk-section" id="contacts">
        <div className="epk-container">
          <div className="section-title">Контакти</div>
          <div className="grid3">
            <div className="linkbox">
              <div className="lbl">Email</div>
              <a href="mailto:belletriq@gmail.com">belletriq@gmail.com</a>
              <a href="mailto:cutmylips@gmail.com" style={{ display: 'block', marginTop: '6px' }}>cutmylips@gmail.com</a>
            </div>
            <div className="linkbox">
              <div className="lbl">Телефон</div>
              <a href="tel:+380637823686">+38 063 782 36 86</a>
            </div>
          </div>
        </div>
      </section>

      <div className="epk-footer">
        <div className="epk-container">Cutmylips — DISANTREFACT © 2026</div>
      </div>
    </div>
  );
};