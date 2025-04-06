// import timeTrackerImage from '../assets/images/pages/time_tracker1.png';
// import timeTrackerImage2 from '../assets/images/pages/time_tracker2.png';
// import timeTrackerImage3 from '../assets/icons/timetracker_favicon.png';
// import csontkovacsbence from '../assets/images/pages/csontkovacsbence.png';
// import csontkovacsbence2 from '../assets/images/pages/csontkovacsbence2.png';
// import csontkovacsbenceLogo from '../assets/icons/csontkovacsbence_logo.png';
// import kokaiZoltanPalyazatiras from '../assets/images/pages/kokaizoltan_palyazatiras.png';
// import kokaiZoltanPalyazatiras2 from '../assets/images/pages/kokaizoltan_palyazatiras2.png';
// import kokaiZoltanPalyazatirasLogo from '../assets/icons/kokaizoltan_palyazatiras_logo.png';
// import artistListImage from '../assets/images/pages/hungaroton_artist_list.png';
// import artistListImage2 from '../assets/images/pages/hungaroton_artist_list2.png';
// import hungarotonImage from '../assets/icons/hungaroton_icon.ico';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import hu from './hu.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hu: { translation: hu }
    },
    lng: 'en', // Alapértelmezett nyelv
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    returnObjects: true
  });

export default i18n;
