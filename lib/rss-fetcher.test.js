import assert from 'node:assert';
import { fetchOneSource } from './rss-fetcher.js';
import { RSS_SOURCES, LOOKBACK_HOURS } from './rss-config.js';

describe('RSS Fetcher', async () => {
  describe('Fetch one source', async () => {
    it('publishedAt should be not empty', async () => {
      const cutoffTime = new Date(Date.now() - LOOKBACK_HOURS * 60 * 60 * 1000);
      const result = await fetchOneSource(RSS_SOURCES[0], cutoffTime);

      console.log(`Fetched ${result.length} items`);

      assert.equal(
        true,
        result.every(({ publishedAt }) => publishedAt)
      );
    });
  });
});
