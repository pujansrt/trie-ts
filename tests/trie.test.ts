import { Trie } from 'trie';

describe('Trie', () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  test('insert and autoComplete with one word', () => {
    trie.insert('hello');
    expect(trie.autoComplete('he')).toEqual(['hello']);
    expect(trie.autoComplete('hello')).toEqual(['hello']);
    expect(trie.autoComplete('h')).toEqual(['hello']);
    expect(trie.autoComplete('')).toEqual(['hello']);
    expect(trie.autoComplete('helloo')).toEqual([]);
  });

  test('insert and autoComplete with multiple words', () => {
    trie.insert('cat');
    trie.insert('car');
    trie.insert('cart');
    trie.insert('dog');
    trie.insert('door');
    trie.insert('dot');

    expect(trie.autoComplete('ca').sort()).toEqual(['cat', 'car', 'cart'].sort());
    expect(trie.autoComplete('car').sort()).toEqual(['car', 'cart'].sort());
    expect(trie.autoComplete('do').sort()).toEqual(['dog', 'door', 'dot'].sort());
    expect(trie.autoComplete('d')).toEqual(['dog', 'door', 'dot']);
    expect(trie.autoComplete('z')).toEqual([]);
  });

  test('autoComplete returns empty array if prefix not found', () => {
    trie.insert('apple');
    expect(trie.autoComplete('banana')).toEqual([]);
  });

  test('insert handles duplicate words', () => {
    trie.insert('test');
    trie.insert('test');
    expect(trie.autoComplete('te')).toEqual(['test']);
    expect(trie.autoComplete('test')).toEqual(['test']);
  });

  test('insert and autoComplete with overlapping prefixes', () => {
    trie.insert('a');
    trie.insert('ab');
    trie.insert('abc');
    expect(trie.autoComplete('a').sort()).toEqual(['a', 'ab', 'abc'].sort());
    expect(trie.autoComplete('ab').sort()).toEqual(['ab', 'abc'].sort());
    expect(trie.autoComplete('abc')).toEqual(['abc']);
  });

  test('autoComplete with empty trie', () => {
    expect(trie.autoComplete('a')).toEqual([]);
  });

  test('performance of Trie insert', () => {
    const trie = new Trie();
    const words = Array.from({ length: 100_000 }, (_, i) => `word${i}`);

    const start = performance.now();
    for (const word of words) {
      trie.insert(word);
    }
    const end = performance.now();
    const duration = end - start;

    console.log(`Inserted 10,000 words in ${duration}ms`);
    expect(duration).toBeLessThan(500);
  });
});
