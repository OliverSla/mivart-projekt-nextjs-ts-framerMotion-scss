'use client'

import React from 'react'
import './NeedsSection.scss'
import { motion } from 'framer-motion'

const NeedsSection = () => {
  const values = [
    {
      title: 'DETI',
      image: '/menu/menu-need-1.jpg'
    },
    {
      title: 'BÝVANIE',
      image: '/menu/menu-need-2.jpg'
    },
    {
      title: 'SPORENIE',
      image: '/menu/menu-need-3.jpg'
    },
    {
      title: 'DÔCHODOK  ',
      image: '/menu/menu-need-4.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  }

  const valueItemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }



  return (
    <>
      <div className="needs_head">
        <img className="logo" src="/images/logo.svg" />
        <img className="circles" src="/images/bg-needs-circles.svg" />
      </div>
      <section id="needs" className="needs_section">
        <div className="section_wrapper">
          <div className="section_title">
            <img className="header" src="/images/header-need.svg" />
            <h2>POTREBY ĽUDÍ</h2>
            <p>LEONIDES</p>
            <img className="ornament" src="/images/ornament.svg" />
          </div>
          <motion.div
            className="value-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div className="value-item" key={index} variants={valueItemVariants}>
                <div className="value-content">
                  <div className="title-area">
                    <h3>{value.title}</h3>
                    <div className="underline"></div>
                  </div>

                  <div className="circle-container">
                    {/* Pohybujúci sa kruh po kruhovej dráhe */}
                    <motion.div className="floating-circle">
                      {/* Rotujúci kruh */}
                      <motion.div className="rotating-circle"></motion.div>
                    </motion.div>

                    {/* Statický obrázok s trojuholníkmi */}
                    <div className="image-container-circle">
                      <img src={value.image} alt={value.title} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text_wrapper">
            <div className="text_1">
              <p>
                V taliansku ľudia často používajú termín „sacrifici" a myslia tým odriekanie, ktoré často znášajú, aby
                zlepšili život svoj, svojich detí i celej rodiny. Obetujú mnoho príjemných a lákavých vecí preto, aby si
                oni a ich blízki mohli v budúcnosti užívať viac. Peniaze, ktoré nasporíme dnes, nás ušetria starostí
                zajtrajška. Sporenie a Investovanie je skutočne jedinou prácou, ktorú robíme len a len pre seba. Už v
                starom Babylone ľudia vedeli, že 10% z príjmu im zabezpečí do budúcna bohatstvo. Je dokázané, že ak
                človeku z mesiaca na mesiac takto klesne príjem, jeho kvalita života sa nijak zásadne nezmení. Sú štyri
                základné okruhy prečo si ľudia najčastejšie sporia.
              </p>
            </div>

            <div className="text_2">
              <span>I.</span>
              <h4>DETI</h4>
              <p>
                Extrahovaný text z obrázku: Deti sú naša budúcnosť, preto je základnou úlohou rodiča zabezpečiť kvalitné
                štúdium alebo podporovať jeho talent. V dnešnej dobe je finančne náročné zabezpečiť potreby dieťaťa a
                môže to nadmerne zaťažiť rodinný rozpočet. Preto najlepšou voľbou sporiť dieťaťu od narodenia v
                kvalitnom produkte s nízkymi poplatkami a zaujímavým výnosom.
              </p>
            </div>

            <div className="text_2">
              <span>II.</span>
              <h4>BÝVANIE</h4>
              <p>
                Bývanie je základná ľudská potreba, ktorú rieši každý človek vo svojom živote. Bývanie je zároveň
                najnákladnejšia potreba ktorá sa vo väčšine prípadov nezaobíde bez hypotéky. Zorientovať sa v spleti
                ponúk, ohodnotenie nehnuteľností, legislatíva a ďalšie náležitosti, to všetko si vyžaduje odbornú
                znalosť a veľké množstvo času. Presne pre to, Vám náš tím odborníkov pomôže zorientovať sa a
                sprostredkuje kompletné financovanie Vášho vysnívaného bývania.
              </p>
            </div>

            <div className="text_2">
              <span>III.</span>
              <h4>BEZÚČELOVÉ SPORENIE</h4>
              <p>
                Či už je to auto, vysnívaná dovolenka alebo tvorba rezerv toto všetko si vyžaduje správne naplánovanie a
                sebadisciplínu. Nie nadarmo sa hovorí, že ľudia neplánujú zlyhávať, ale zlyhávajú pri plánovaní. Tvorbou
                rezerv, zabezpečením príjmu v prípade neočakávaných udalostí. Najviac finančných problémov a sociálnych
                prípadov sú z nepredvídateľných udalostí. Každé možné riziko sa dá predvídať a eliminovať jeho dopad na
                rodinu. Pomôžeme Vám naplánovať vaše sny a ciele tak, aby sa stali skutočnosťou.
              </p>
            </div>

            <div className="text_2">
              <span>IV.</span>
              <h4>DÔCHODOK</h4>
              <p>
                Demografický vývoj populácie sa na Slovensku vyvíja nepriaznivo. Pôrodnosť klesla v porovnaním od roku
                1980 a až do roku 2013 o polovicu. Populácia na Slovensku starne a rodí sa stále menej a menej detí.
                Tento fakt ma zásadný vplyv na dôchodkový systém na Slovensku ktorí je už dnes neudržateľný. Dnes je
                Sociálna poisťovňa cca 1 mld. EUR v mínuse a každým rokom sa tento schodok dotovať zo štátneho rozpočtu.
                Už dnes je jasné, že tento dôchodkový systém nie je udržateľný. Dôchodok nebude otázkou veku ale peňazí.
                Prvý pilier čiže dôchodok zo sociálnej poisťovni bude len akási podpora v starobe a gro dôchodku budú
                tvoriť peniaze zo súkromných zdrojov, ktoré si ľudia musia vytvoriť počas aktívneho pracovného života.
                Preto je III. Pilier neodmysliteľnou súčastou každého človeka ktorý chce stráviť dôstojný dôchodok.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NeedsSection
