const RSS_SOURCES = [
  {
    name: 'Reuters World',
    url: 'https://news.google.com/rss/search?q=site%3Areuters.com&hl=en-US&gl=US&ceid=US%3Aen',
  },
  {
    name: 'AP News',
    url: 'https://apnews.com/hub/ap-top-news?output=rss',
  },
  {
    name: 'Ukrinform',
    url: 'https://www.ukrinform.net/rss/block-lastnews',
  },
  {
    name: 'Українська правда',
    url: 'https://www.pravda.com.ua/rss/',
  },
  {
    name: 'BBC World',
    url: 'https://feeds.bbci.co.uk/news/world/rss.xml',
  },
];

const LOOKBACK_HOURS = 24;

module.exports = { RSS_SOURCES, LOOKBACK_HOURS };
