import b from 'benny';
import { Trie } from 'trie';

const words = Array.from({ length: 10000 }, (_, i) => `word${i}`);
const autoCompletePrefixes = ['word1', 'word12', 'word123', 'word9999', 'word'];

b.suite(
  'Trie Performance',

  b.add('insert 10,000 words', () => {
    return () => {
      const trie = new Trie();
      for (const word of words) {
        trie.insert(word);
      }
    };
  }),

  b.add('autoComplete on 10,000-word trie', () => {
    const trie = new Trie();
    for (const word of words) {
      trie.insert(word);
    }
    return () => {
      for (const prefix of autoCompletePrefixes) {
        trie.autoComplete(prefix);
      }
    };
  }),

  b.cycle(),
  b.complete()
);
