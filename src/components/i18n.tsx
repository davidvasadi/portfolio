import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import timeTrackerImage from '../assets/images/pages/time_tracker1.png';
import timeTrackerImage2 from '../assets/images/pages/time_tracker2.png';
import timeTrackerImage3 from '../assets/icons/timetracker_favicon.png';
import csontkovacsbence from '../assets/images/pages/csontkovacsbence.png';
import csontkovacsbence2 from '../assets/images/pages/csontkovacsbence2.png';
import csontkovacsbenceLogo from '../assets/icons/csontkovacsbence_logo.png';
import kokaiZoltanPalyazatiras from '../assets/images/pages/kokaizoltan_palyazatiras.png';
import kokaiZoltanPalyazatiras2 from '../assets/images/pages/kokaizoltan_palyazatiras2.png';
import kokaiZoltanPalyazatirasLogo from '../assets/icons/kokaizoltan_palyazatiras_logo.png';
import artistListImage from '../assets/images/pages/hungaroton_artist_list.png';
import artistListImage2 from '../assets/images/pages/hungaroton_artist_list2.png';
import hungarotonImage from '../assets/icons/hungaroton_icon.ico';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      // ENGLISH
      en: {
        translation: {
          //Navbar
          navbar: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            services: 'Services',
            contact: 'Contact',
            Navigation: 'Navigation',
            Menu: 'Menu',
            Articles: 'Articles',
          },
          //Hero
          hero: {
            Software: 'Software',
            intro: 'Front-end developer and amateur photographer.',
            description: 'I’m David, a frontend developer based in Budapest. As the founder of Davelopment, I specialize in designing and developing custom websites to help businesses and individuals stand out in the digital space.'

          },
          //About 
          about: {
            intro: "I’m David Vasadi.I live in Budapest, where I design the future.",
            p1: "I’ve been passionate about creating and innovating since childhood. However, it took time to discover what I truly wanted to do. I explored various fields, learned, and grew until I realized that web development is where I can truly thrive. Since finding this path, it has brought immense happiness to my life, and I am endlessly grateful for it.",
            p2: "Over the years, I’ve mastered numerous technologies and delved deeply into building modern designs. To me, a great website is not only visually appealing but also user-friendly, fast, and efficient.",
            p3: "I’ve worked on projects like time tracking system and csontkovacsbence.hu, where I delivered comprehensive services by combining unique design with modern development solutions – from planning to SEO optimization and Google Analytics integration.",
            p4: "My passion lies in full-stack development, maximizing user experience, and crafting solutions that truly create value.",
            github: 'Follow on Github',
            email: 'Send mail',
          },

          //ContentSection && Article
          contentSection: {
            title: 'Writing about web development and case studies of my own projects.',
            readArticle: "Read article",
            emailTitle: "Write a mail.",
            callMe: "Write an email by clicking the button below.",
            call: "Send",
            work: "Work",
            downloadCV: "Download - CV",

            work1: {
              id: '1',
              date: 'April 1, 2025',
              workflow: ['Rest Api', 'Next Js', 'Typescript', 'AWS Amplify'],
              title: 'Hungaroton Artist List',
              description: 'A modern web application that integrates APIs to display artist data, supporting search, pagination, and filtering.',
              description2: 'During this project, I encountered several technological challenges, including integrating Next.js, React, and Material-UI, as well as optimizing API calls using debouncing techniques to enhance the user experience.',
              imageUrl: artistListImage, // a predefined variable representing the project image
              content: 'The goal of this project is to provide users with a clear and dynamic interface for accessing artist data, enabling fast and efficient search and filtering, while leveraging the benefits of modern web technologies.',
              content2: 'The application utilizes a modern React and Next.js architecture, ensuring scalability and maintainability, while optimizing the user experience through robust API integration and debouncing techniques.',
              image2Url: artistListImage2,
              company: 'Freelancer',
              position: 'Full Stack Developer',
              timeline: '2023 -'
            },
            work2: {
              id: '2',
              date: ' December 1, 2024',
              workflow: ['Tailwind', 'Vue'],
              title: 'Time Tracking System',
              description: 'Helps companies efficiently manage employees\' working hours, thereby increasing productivity and optimizing work time...',
              description2: 'During the project, I encountered several new technological challenges, such as mastering Vue.js component structures and state management. I improved in dynamic data handling and the use of Vue Router, as well as enhancing the user experience to make the system intuitive and easy to use.',
              imageUrl: timeTrackerImage,
              content: 'The biggest challenge was figuring out how to integrate a time management system that accurately tracks work hours without becoming overly complicated. The system can track work time, generate reports, and even assist in visualizing the data.',
              content2: 'The application was mainly developed for companies to help them manage employees\' work hours more effectively, thus increasing productivity.',
              image2Url: timeTrackerImage2,
              company: 'Ramszesz Bútor Ltd.',
              position: 'Front-end Developer',
              timeline: '2022-2023',
            },
            work3: {
              id: '3',
              date: ' October 3, 2024',
              workflow: ['UX/UI', 'SEO', 'Figma', 'Fullstack'],
              title: 'Csontkovacsbence',
              description: 'An online presentation platform with a unique design, providing a fast, responsive, and SEO-optimized experience for visitors, making services easily accessible and promotable.',
              description2: 'Both the frontend and backend were developed using modern JavaScript, with animations and interactive elements to improve the user experience. The website includes a custom design that I developed, taking both visual appearance and functionality into account.',
              imageUrl: csontkovacsbence,
              content: 'The website is SEO-optimized with proper meta tags, keywords, and responsive design to ensure it is easily indexed by search engines. With Google Analytics integration, I tracked visitor behavior and conversions to fine-tune the site. Using cPanel, I managed the site\'s settings, including database configurations, SSL certificate installation, and automatic backups.',
              content2: 'My goal was to create a fast, secure, and well-optimized website that adheres to modern development and SEO standards.',
              image2Url: csontkovacsbence2,
              company: 'Ramszesz Bútor Ltd.',
              position: 'Front-end Developer',
              timeline: '2022-2023',
            },
            work4: {
              id: '4',
              date: ' April 5, 2024',
              workflow: ['UX/UI', 'Figma', 'Fullstack', 'PHP'],
              title: 'Kókai Zoltán Grant Writing',
              description: 'The website was built with a custom-designed layout and bespoke WordPress dynamic code, enabling content management and blogging while ensuring a personalized and professional appearance.',
              description2: 'I created a personalized template for the site, which I published as a theme in WordPress. The website allows for the creation of blogs, making it easy to update and expand.',
              imageUrl: kokaiZoltanPalyazatiras,
              content: 'I crafted every element of the design using custom coding, focusing on both the visual appearance and functionality. The website is not only aesthetically pleasing but also provides user-friendly navigation, ensuring seamless browsing.',
              content2: 'The goal was to create a modern, dynamically functioning website that meets user needs and modern online presence requirements.',
              image2Url: kokaiZoltanPalyazatiras2,
              // company: 'Ramszesz Bútor Ltd.',
              // position: 'Front-end Developer',
              // timeline: '2022-2023',
            },
          },
          // Projects
          projects: {
            title: 'Things I created to leave a mark on the world.',
            description: 'Over the years, I’ve worked on countless smaller projects, but these are the ones I’m most proud of. Many of them are open source, so if something catches your interest, check out the code and contribute if you have an idea on how to improve it."',
            project1: {
              title: 'Project 1',
              label: 'Hungaroton Artist List',
              description: 'A modern web app displaying artist data with search, pagination, and filtering.',
              link: 'https://main.d32fz1viwiq45h.amplifyapp.com/?page=1',
              imageUrl: hungarotonImage,
              imageTitle: 'hungaroton Icon',
            },
            project2: {
              title: 'Project 2',
              label: 'My time tracker',
              description: 'Helps companies efficiently manage employees time',
              link: 'https://davidvasadi.github.io/my-time-tracker/',
              imageUrl: timeTrackerImage3,
              imageTitle: 'time tracker',
            },
            project3: {
              title: 'Project 3',
              label: 'Chiropractor Bence',
              description: 'Service Advertising Page',
              link: 'https://csontkovacsbence.hu',
              imageUrl: csontkovacsbenceLogo,
              imageTitle: 'csontkovacsbence',
            },
            project4: {
              title: 'Project 4',
              label: 'Zoltán Kókai Grant Writing',
              description: 'Grant Writing Blog Page',
              link: 'https://kokaizoltan.hu',
              imageUrl: kokaiZoltanPalyazatirasLogo,
              imageTitle: 'kokai zoltan',
            },
          },

          // Services
          services: {
            title: 'Web Development, Custom Design, Time Management, and Database Solutions with Modern Technologies',
            description: 'I offer personalized websites, custom UX/UI designs, time management solutions, and efficient database management systems. All with the latest tools to make your projects professional and successful!',
            service1: {
              title: 'UX/UI Design',
              label: 'Creating custom user-friendly designs that strengthen your brand and enhance the user experience.',
              description: 'Supported by Figma-based prototypes and user testing.',
              workflow1: 'Figma',
              workflow2: 'Prototype',
              workflow3: 'User Testing',
            },
            service2: {
              title: 'Web Development with Modern Technologies',
              label: 'Building modern, fast, and responsive websites using React and Tailwind CSS.',
              description: 'Creating responsive websites that work flawlessly on all devices.',
              workflow1: 'React',
              workflow2: 'Tailwind',
              workflow3: 'Responsive Website',
            },
            service3: {
              title: 'SEO Optimization',
              label: 'Optimizing your website for search engines for better visibility.',
              description: 'Strategic use of keywords and fine-tuning technical performance.',
              workflow1: 'SEO',
              workflow2: 'Keyword Research',
              workflow3: 'Analytics',
            },
            service4: {
              title: 'Backend Solutions',
              label: 'Developing custom database management systems and dynamic features.',
              description: 'Building custom database management systems and dynamic features. Creating secure and scalable backend solutions with PHP and MySQL.',
              workflow1: 'PHP',
              workflow2: 'MySQL',
              workflow3: 'Database Management',
            },
          },

          //Footer
          footer: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            services: 'Services',
            contact: 'Contact',
            Navigation: 'Navigation',
            Menu: 'Menu',
            Articles: 'Articles',
          },
        },
      },
      //////////////////////////////////////////////////////////////      
      ////////////////////////// HUNGARY  //////////////////////////
      //////////////////////////////////////////////////////////////
      hu: {
        translation: {
          //Navbar
          navbar: {
            home: 'Kezdőlap',
            about: 'Rólam',
            projects: 'Projektek',
            services: 'Szolgáltatások',
            contact: 'Kapcsolat',
            Navigation: 'Navigáció',
            Menu: 'Menü',
            Articles: 'Cikkek',
          },
          //Hero
          hero: {
            Software: 'Szoftver',
            intro: 'Front-end fejlesztő és amatőr fotós.',
            description: 'David vagyok, frontend fejlesztő, aki Budapesten él. A Davelopment alapítójaként egyedi weboldalak tervezésével és fejlesztésével segítek vállalkozásoknak és magánszemélyeknek kiemelkedni a digitális térben.'
          },
          //About 
          about: {
            intro: 'Vasadi Dávid vagyok. Budapesten élek, ahol a jövőt tervezem.',
            p1: "Gyerekkorom óta rajongok az alkotásért és az innovációért.Azonban időbe telt, mire megtaláltam, hogy mivel is szeretnék igazán foglalkozni. Sok területet kipróbáltam, tanultam, és fejlődtem, míg végül ráébredtem, hogy a webfejlesztés az, ahol igazán kiteljesedhetek. Amióta rátaláltam erre az útra, óriási boldogságot hozott az életembe, és végtelenül hálás vagyok érte.",
            p2: "Az évek során számos technológiát elsajátítottam, és emellett elmélyültem a modern design felépítésében is. Számomra a jó weboldal nemcsak jól néz ki, hanem könnyen használható, gyors és hatékony is. ",
            p3: "Olyan projekteken dolgoztam, mint az időkövető rendszer vagy a csontkovacsbence.hu, ahol az egyedi design és a modern fejlesztési megoldások ötvözésével nyújtottam teljes körű szolgáltatást – a tervezéstől a SEO-optimalizáláson át a Google Analytics integrációig.",
            p4: "Szenvedélyem a full-stack fejlesztés, a felhasználói élmény maximalizálása, és olyan megoldások kidolgozása, amelyek valóban értéket teremtenek. ",
            github: 'Kövess Githubon',
            email: 'Küldj mailt',
          },//A Davelopment alapítójaként célom, hogy ügyfeleim digitális jelenlétét erősebbé és hatékonyabbá tegyem.

          //ContentSection && Article
          contentSection: {
            title: 'Írás a webfejlesztésről és a saját projektek esettanulmányairól.',
            readArticle: "Tovább olvasok",
            emailTitle: "Küldj emailt.",
            callMe: "Írj emailt az alábbi gombra kattintva.",
            call: "Küldés",
            work: "Munkahelyek",
            downloadCV: "Letöltés - CV",

            work1: {
              id: '1',
                date: 'Április 1, 2025',
                title: 'Hungaroton Művészlista',
                description: 'Egy modern webalkalmazás, amely integrálja az API-kat az előadók adatainak megjelenítéséhez, támogatva a keresést, lapozást és szűrést.',
                description2: 'A projekt során számos technológiai kihívással találkoztam, beleértve a Next.js, React és Material-UI integrációját, valamint az API-hívások optimalizálását debouncing technikával, ami tovább javította a felhasználói élményt.',
                // imageUrl: artistListImage, // itt egy előre definiált képváltozó, ami a projekt képi reprezentációját tartalmazza
                content: 'A projekt célja, hogy egy áttekinthető és dinamikus felületet biztosítson a felhasználók számára a művészek adataihoz, lehetővé téve a gyors és hatékony keresést és szűrést, miközben a modern webes technológiák nyújtotta előnyöket is kihasználja.',
                content2: 'Az alkalmazás a modern React és Next.js architektúrát használja, biztosítva a skálázhatóságot és karbantarthatóságot, miközben az API integráció és a debouncing technika révén a felhasználói élmény is optimalizálva van.',
                company: 'Szabadúszó',
                position: 'Full Stack Developer',
                timeline: '2023 -'
          
            },
            work2: {
              id: '2',
              date: ' December 1, 2024',
              title: 'Időkövető rendszer',
              description: 'Segít a cégeknek a munkavállalók idejének hatékony kezelésében, így növelve a termelékenységet és optimalizálva a munkaidőt.',
              description2: 'A projekt során számos új technológiai kihívással találkoztam, például a Vue.js alapú komponens struktúrák és állapotkezelés elsajátításával. Fejlődtem a dinamikus adatkezelés és a Vue Router alkalmazásában, valamint a felhasználói élmény javításában, hogy a rendszer intuitív és könnyen kezelhető legyen.',
              imageUrl: timeTrackerImage,
              content: 'A legnagyobb kihívást az jelentette, hogy miként integráljak egy időpont-kezelési rendszert, amely pontosan nyújtja a munkavégzés idejét anélkül, hogy bonyolulttá válna. A rendszer képes nyomon követni a munkaidőt, jelentéseket generálni, és még az adatok vizualizálásában is segít.',
              content2: ' Az alkalmazás alapvetően a vállalatok számára készült, hogy hatékonyabban kezeljék az alkalmazottak munkaidejét  //  rendezett és naprakész.',
              company: 'Ramszesz Bútor Kft.',
              position: 'Front-end Fejlesztő',
              timeline: '2022-2023',
            },
            work3: {
              id: '3',
              date: ' Október 3, 2024',
              title: 'Csontkovacsbence ',
              description: 'Egyedi dizájnnal készült online bemutatkozó platform, amely gyors, reszponzív és SEO-optimalizált élményt biztosít a látogatóknak, segítve a szolgáltatások könnyű elérhetőségét és népszerűsítését.',
              description2: ' A frontend és a backend modern JavaScript használatával készült, animációkkal és interaktív elemekkel a felhasználói élmény javítása érdekében.Az oldalhoz egyedi design is készült, amelyet ezt követően le is fejlesztettem, figyelembe véve a vizuális megjelenést és a funkcionalitást.',
              imageUrl: csontkovacsbence,
              content: 'Az oldal SEO szempontból optimalizált, megfelelő meta tagekkel, kulcsszavakkal és reszponzív dizájnnal, hogy a keresők könnyen indexálják. A Google Analytics integrációval nyomon követtem a látogatói viselkedést és konverziókat, hogy finomhangoljam az oldalt. A cPanel segítségével kezeltem az oldal beállításait, beleértve az adatbázis beállításokat, az SSL tanúsítvány telepítését és az automatikus biztonsági mentéseket.',
              content2: 'A célom egy gyors, biztonságos és jól optimalizált weboldal létrehozása volt, amely megfelel a modern fejlesztési és SEO szabványoknak.',
              image2Url: csontkovacsbence2,
              company: 'Ramszesz Bútor Kft.',
              position: 'Front-end Fejlesztő',
              timeline: '2022-2023',
            },
            work4: {
              id: '4',
              date: ' Április 21, 2024',
              title: 'Kókai Zoltán pályázatírás',
              description: 'A weboldal saját tervezésű designnal és egyedi WordPress dinamikus kóddal készült, amely lehetővé teszi a tartalomkezelést és a blogírást, garantálva a személyre szabott és professzionális megjelenést.',
              description2: 'Készítettem egy személyre szabott sablont, amelyet WordPress-ben témaként publikáltam. A weboldal lehetőséget biztosít blogok létrehozására, így könnyedén frissíthető és bővíthető. ',
              imageUrl: kokaiZoltanPalyazatiras,
              content: 'A dizájn minden elemét saját kódolással alakítottam ki, figyelve a vizuális megjelenésre és a funkcionalitásra. A weboldal nemcsak esztétikus, hanem a felhasználóbarát navigációt is biztosít, lehetővé téve a zökkenőmentes böngészést. ',
              content2: 'A cél egy modern, dinamikusan működő weboldal létrehozása volt, amely megfelel a felhasználói igényeknek és a naprakész online jelenlét követelményeinek.',
              image2Url: kokaiZoltanPalyazatiras2,
            },
          },
          //Projects
          projects: {
            title: 'Dolgok, amiket azért hoztam létre, hogy nyomot hagyjak a világban.',
            description: 'Az évek során rengeteg kisebb projekten dolgoztam, de ezek azok, amelyekre a legbüszkébb vagyok.Sok közülük nyílt forráskódú, így ha valami felkelti az érdeklődésedet, nézd meg a kódot, és járulj hozzá, ha van ötleted, hogyan lehetne javítani.',

            project1: {
              title: 'Project 1',
              label: 'Hungaroton Művészlista',
              description: 'Egy modern webalkalmazás, amely zeneszerző adatokat jelenít meg kereséssel, lapozással és szűréssel',
              // link: 'github.hu',
              // imageUrl: 'https://via.placeholder.com/300x200',
              imageTitle: 'Időkövető rendszer',
            },
            project2: {
              title: 'Project 2',
              label: 'Időkövető rendszer',
              description: 'Segít a cégeknek a munkavállalók idejének hatékony kezelésében',
              // link: 'github.hu',
              // imageUrl: 'https://via.placeholder.com/300x200',
              imageTitle: 'Időkövető rendszer',
            },
            project3: {
              title: 'Project 3',
              label: 'Csontkovács Bence',
              description: 'Szolgáltatást hírdető oldal',
              // link: 'csontkovacsbence.hu',
              // imageUrl: 'https://via.placeholder.com/300x200',
              imageTitle: 'Csonka Bence csontkovács',
            },
            project4: {
              title: 'Project 4',
              label: 'Kókai Zoltán pályázatírás',
              description: 'Pályázatíró blog oldal',
              // link: 'https://main.d32fz1viwiq45h.amplifyapp.com/?page=1',
              // imageUrl: 'https://via.placeholder.com/300x200',
              imageTitle: 'Kókai Zoltán pályázatírás',
            },
          },
          // Services
          services: {
            title: 'Webfejlesztés, egyedi design, időgazdálkodás és adatbázis-kezelés modern technológiákkal',
            description: 'Személyre szabott weboldalakat, egyedi UX/UI designokat, időgazdálkodási megoldásokat és hatékony adatbázis-kezelési rendszereket kínálok. Mindezt a legmodernebb eszközökkel, hogy projektjeid professzionális és eredményes legyen!',
            service1: {
              title: 'UX/UI design',
              label: 'Egyedi felhasználóbarát design tervezése,amely erősíti a márkád és javítja a felhasználói élményt.',
              description: 'Figma-alapú prototípusokkal és felhasználói tesztelésekkel támogatva.',
              workflow1: 'Figma',
              workflow2: 'Prototípus',
              workflow3: 'Felhasználói tesztelés',
            },
            service2: {
              title: 'Webfejlesztés modern technológiákkal',
              label: 'Korszerű,gyors és reszponzív weboldalak készítése React és Tailwind CSS alapokon',
              description: 'Modern, minden eszközön tökéletesen működő reszponzív weboldalak készítése.',
              workflow1: 'React',
              workflow2: 'Tailwind',
              workflow3: 'Responsive oldal',
            },
            service3: {
              title: 'SEO optimalizálás',
              label: 'Weboldalad keresőmotorokra optimalizálása a jobb láthatóság érdekében',
              description: 'Kulcsszavak stratégiai használata és a technikai teljesítmény finomhangolása.',
              workflow1: 'SEO',
              workflow2: 'Kulcsszó kutatás',
              workflow3: 'Analitikák',
            },
            service4: {
              title: 'Backend megoldások',
              label: 'Egyedi adatbázis-kezelő rendszerek és dinamikus funkciók fejlesztése.',
              description: 'Egyedi adatbázis-kezelő rendszerek és dinamikus funkciók fejlesztése.PHP és MySQL alapú, biztonságos és skálázható backend megoldások készítése.',
              workflow1: 'PHP',
              workflow2: 'MySql',
              workflow3: 'Adatbázis-kezelés',
            },
          },
          //Footer
          footer: {
            home: 'Kezdőlap',
            about: 'Rólam',
            projects: 'Projektek',
            services: 'Szolgáltatások',
            contact: 'Kapcsolat',
            Navigation: 'Navigáció',
            Menu: 'Menü',
            Articles: 'Cikkek',
          },

        },
      },
    },
    lng: 'en', // alapértelmezett nyelv
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,

    },
    returnObjects: true,
  });
export default i18n
