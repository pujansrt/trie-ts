# Trie-TS

A lightweight and efficient **Trie (Prefix Tree)** data structure implemented in **TypeScript**, suitable for applications like **autocomplete**, **dictionary search**, and **prefix-based lookups**.

## 📦 Features

- 🧠 **Autocomplete** based on prefixes
- ➕ Insert words efficiently
- 🔍 Search for complete words or prefixes
- 🧹 Clean and easy-to-read TypeScript code
- ✅ Minimal and extensible design
- 📄 Ready for integration in larger TypeScript applications

## 🧪 Use Cases

- Command or code suggestion tools
- Search engine prefix matching
- Spell checking or correction systems
- Efficient string matching for AI/NLP tools

---

## 🚀 Getting Started

### 🔧 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/pujansrt/trie-js.git
cd trie-js/trie-ts
npm install
```

# How to use

```js
import { Trie } from './trie';

const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("ape");

// Search
console.log(trie.search("app"));       // true
console.log(trie.search("apricot"));   // false

// Autocomplete
console.log(trie.autoComplete("ap"));  // ["apple", "app", "ape"]
```

# Performance
Trie of 100,000 Unique words, it took 23 ms to retrieve one.
