'use client'

import { motion } from 'framer-motion'
import './AboutSection.scss'

const AboutSection = () => {
  const values = [
    {
      title: 'INŠPIROVANÝ HISTÓRIOU',
      image: '/menu/menu-about-1.jpg'
    },
    {
      title: 'VÍZIA A POSLANIE',
      image: '/menu/menu-about-2.jpg'
    },
    {
      title: 'HODNOTY LEONIDES',
      image: '/menu/menu-about-3.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const valueItemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  }

  // Textové animácie
  const textHeadingVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const textParagraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i:any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  }

  return (
    <section id="about" className="about_section">
      <div className="section_wrapper">
        <motion.div
          className="section_title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img className="header" src="/images/header-about.svg" />
          <h2>O SPOLOČNOSTI</h2>
          <p>LEONIDES</p>
          <img className="ornament" src="/images/ornament.svg" />
        </motion.div>

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
                <div className="image-container">
                  <div className="diagonal-overlay"></div>
                  <img src={value.image} />
                  <div className="corner-accent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text_wrapper_about">
          {/* Prvý text - Inšpirovaný históriou */}
          <motion.div 
            className="text_wrapper_container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h4 variants={textHeadingVariants}>INŠPIROVANÝ HISTÓRIOU</motion.h4>
            <motion.p variants={textParagraphVariants}>
              Staroveké Grécko, označované ako kolíska Európskej civilizácie. Najpokrokovejším objavom je{' '}
              <motion.span 
                animate={{ color: ["#9e8b67", "#85755a", "#9e8b67"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Demokracia
              </motion.span>, o ktorú sa usilujú všetky súčasné štátne zriadenia. Veľkým gréckym zázrakom je
              vznik filozofie. Diela starovekých Gréckych filozofov sú studnicou nevyčerpateľného poznania a inšpirácie.
              Boli položené základy dnešných disciplín ako fyzika, botanika, logika, rečníctvo a politické vedy. Veľký
              rozmach v stavebnom umení prinieslo pokroky ako vodovod, kanalizácia, či kúpele. Grécka lyrika, divadlo,
              školstvo a olympiáda. Toto všetko malo byť zničené jedným národom, jedným kráľom{' '}
              <span>Xerxesom, kráľom Perzskej ríše.</span> Mala to byť pomsta za porážku jeho otca spred desiatich
              rokov. Zhromaždil najväčšiu armádu tej doby s úmyslom podmaniť si celé Grécko. <br />
              <br />
              Na odpor sa mu postavil jediný človek z celého Grécka LEONIDAS, kráľ Sparty. Kráľ, ktorý chcel uchrániť
              svoj národ pred smrťou a otroctvom. Leonidas vedel, že jediná možnosť postaviť sa na odpor je v priesmyku
              v Termopylách. Tam Peržanom nepomôže ani mnohopočetná presila, kedže sa bude bojovať na úzkom úseku
              priesmyku v Termopylách. Preto kráľ Leonidas s tristo najlepšími vojakmi vyrazil na boj k Termopylám, kde
              čakali na blížiaceho sa Xerxesa a jeho armádu. Tri dni odolávala spartanská armáda náporu Peržanov vďaka
              úzkemu priesmyku a dobre vyzbrojeným Spartanom. Barbarom neumožnili uplatniť obrovskú presilu. Bolo
              otázkou času, kedy sa bitka skončí a hrdinskí bojovníci padnú. V tejto dobe sa roztrieštené Grécko spojilo
              a vyrazilo do boja proti Peržanom, ktorých definitívne porazili. Odkaz pre dnešné generácie: Táto bitka a
              nekonečné hrdinstvo Leonidasa bola jedným z najzásadnejších okamihov vývoja našej ľudskej civilizácie.
              Túžba pokračovať bola silnejšia, ako túžba prestať.{' '}
              <span>
                Hrdinstvo, odvaha, vytrvalosť, vášeň a túžba nás inšpirovala a stále inšpiruje v spoločnosti LEONIDES.
              </span>
            </motion.p>
          </motion.div>

          {/* Druhý text - Vízia a poslanie */}
          <motion.div 
            className="text_wrapper_container container_1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h4 variants={textHeadingVariants}>VÍZIA A POSLANIE LEONIDES</motion.h4>
            <motion.p variants={textParagraphVariants}>
              Kráľ LEONIDAS sa svojou odvahou a vierou vzoprel otroctvu a tyranii Perzskej ríše, čím uchránil základné
              ľudské hodnoty ako je sloboda a demokracia. Svojim hrdinstvom ovplyvnil vývoj celej civilizácie až po
              dnešok. Inšpirovaný históriou sme sa my v spoločnosti <span>LEONIDES - Transform your life </span> od
              svojho vzniku zaviazali, že naším poslaním bude pozitívne transformovať ľudské životy. Našim klientom
              prinášame transparentné informácie pod „pokrývkou" finančného trhu, o ktorých sa otvorene nehovorí. Reálne
              riešenia, výhodné produkty a zodpovedný prístup. <span> Dávame šancu ľuďom,</span> ktorí chcú zmeniť svoj
              život k lepšiemu a žiť svoje sny. Ponúkame obchodnú príležitosť a kompletný systém, ktorý ich privedie k
              úspechu. Motivujeme ľudí, povzbudzujeme ich, aby nabrali odvahu zobrať život do vlastných rúk a vytvoriť
              si svoju vlastnú výsnivanú budúcnosť. Sme presvedčení, že každý človek by mal dostať šancu žiť život, aký
              si sám vysníval. Naše poslanie, systém, a vízia pomáha k vytváraniu hodnôt, čím prispievame k dobru celej
              spoločnosti.
            </motion.p>
          </motion.div>

          {/* Tretí text - Hodnoty */}
          <motion.div 
            className="text_wrapper_container container_1 italic_text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h4 variants={textHeadingVariants}>HODNOTY</motion.h4>
            <div>
              {[
                "Transparentnosť", 
                "Etika", 
                "Odvaha", 
                "Viera", 
                "Líderstvo", 
                "Vzdelávanie", 
                "Tímovosť", 
                "Presvedčenie"
              ].map((value, i) => (
                <motion.p 
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                >
                  {value}<br/>
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Štvrtý text - Stabilita */}
          <motion.div 
            className="text_wrapper_container container_1 italic_text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h4 variants={textHeadingVariants}>STABILITA A ZÁZEMIE SPOLOČNOSTI</motion.h4>
            <div>
              {[
                "Vznik od roku 2009",
                "Viac ako 10 ročná prax v odbore",
                "Sme členom AFISP",
                "Povolenie NBS PAG",
                "Certifikát solventných firiem",
                "Ocenený TOP externý partner za roky 2014 - 2015"
              ].map((item, i) => (
                <motion.p 
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                >
                  {item}<br/>
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.img 
        className="ornament_2" 
        src="/images/ornament.svg"
        initial={{ opacity: 0, y: 100}}
        whileInView={{ opacity: 1, rotate: 0, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      <motion.img 
        className="money_img" 
        src="/images-2/money copy.png"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </section>
  )
}

export default AboutSection