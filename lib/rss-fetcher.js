import Parser from 'rss-parser';
import { RSS_SOURCES, LOOKBACK_HOURS } from './rss-config.js';

const parser = new Parser();

export async function fetchOneSource(source, cutoffTime) {
  try {
    const feed = await parser.parseURL(source.url);

    return (feed.items || [])
      .map((item) => {
        const publishedAt = item.isoDate ? new Date(item.isoDate) : null;
        return {
          source: source.name,
          title: (item.title || '').trim(),
          text: (item.contentSnippet || item.content || '').trim(),
          url: item.link || '',
          publishedAt,
        };
      })
      .filter(
        (item) => item.url && item.publishedAt && item.publishedAt >= cutoffTime
      );
  } catch (err) {
    console.error(
      `RSS fetch failed for "${source.name}" (${source.url}):`,
      err.message
    );
    return [];
  }
}

export async function fetchRecentNews() {
  const cutoffTime = new Date(Date.now() - LOOKBACK_HOURS * 60 * 60 * 1000);

  const results = await Promise.all(
    RSS_SOURCES.map((source) => fetchOneSource(source, cutoffTime))
  );

  return results.flat().sort((a, b) => b.publishedAt - a.publishedAt);
}
