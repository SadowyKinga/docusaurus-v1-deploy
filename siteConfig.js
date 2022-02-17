module.exports = {

  title: 'Instrukcja obsługi',
  url: 'https://instrukcja.premiumhotel.pl',
  baseUrl: '/',
  projectName: 'PremiumHotel',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  blogSidebarTitle: { default: 'Najnowsze', all: 'All blog posts' },
  headerLinks: [
    { blog: true, label: 'Co nowego'},
    {
      doc: 'PremiumHotel/Wstęp',
      label: 'PremiumHotel'
    },
    {
      doc: 'PremiumHotel.pl/Wstęp',
      label: 'PremiumHotel.pl'
    },
    {
      doc: 'PH-POS/Wstęp',
      label: 'PH POS'
    },
    {
      doc: 'PH-Mobile/Wstęp',
      label: 'PH-Mobile'
    },
  ],
  headerIcon: 'img/logo/logo.svg',
  footerIcon: 'img/logo/Betasi_logo.svg',
  favicon: 'img/logo/favicon/favicon-ph.png',
  algolia: {
    apiKey: '9b34017aacca87c3081b7e0fbb5eaeb5',
    indexName: 'dev_PremiumHotel',
    placeholder: 'Wyszukaj... ',
    appId: 'O9MBLEB2ST',
  },
  colors: {
    primaryColor: '#14286e',
  },

  copyright: `Copyright © ${new Date().getFullYear()} Betasi. Wszelkie prawa zastrzeżone`,
  onPageNav: 'separate',
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  cleanUrl: true,
  docsUrl: '',
  disableHeaderTitle: false,
  docsSideNavCollapsible: true,
  highlight: {
    theme: 'default',
  },
};

