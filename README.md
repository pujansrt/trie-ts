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

Install from npm:

```bash
npm install @pujansrt/trie-ts
```

Or, with yarn:

```bash
yarn add @pujansrt/trie-ts
```

<details>
<summary>Development install (clone & build)</summary>

```bash
git clone https://github.com/pujansrt/trie-ts.git
cd trie-ts
npm install
npm run build
```
</details>

---

## 📚 How to use

**TypeScript / ES Modules:**

```typescript
import { Trie } from "@pujansrt/trie-ts";

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

**CommonJS (Node.js require):**

```js
const { Trie } = require("@pujansrt/trie-ts");
const trie = new Trie();
```

---

## ⚡ Performance
Trie of 100,000 unique words: retrieval took just 23 ms.

---

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.

---

## 📜 License
MIT License — free for personal and commercial use.

---

## 👤 Author
Developed and maintained by Pujan Srivastava, a mathematician and software engineer with 18+ years of programming experience.
