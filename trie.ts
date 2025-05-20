/**
 * A basic Trie (Prefix Tree) implementation in TypeScript.
 * 
 * @author Pujan Srivastava
 */
class Trie {
    private children: Map<string, Trie>;
    private value: string;
    private terminal: boolean;

    constructor(value: string = "") {
        this.value = value;
        this.children = new Map<string, Trie>();
        this.terminal = false;
    }

    private add(char: string): void {
        const newValue = this.value + char;
        this.children.set(char, new Trie(newValue));
    }

    insert(word: string): void {
        let node: Trie = this;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.add(char);
            }
            node = node.children.get(char)!;
        }
        node.terminal = true;
    }

    autoComplete(prefix: string): string[] {
        let node: Trie = this;
        for (const char of prefix) {
            const nextNode = node.children.get(char);
            if (!nextNode) {
                return [];
            }
            node = nextNode;
        }
        return node.collectWords();
    }

    private collectWords(): string[] {
        const results: string[] = [];
        if (this.terminal) {
            results.push(this.value);
        }
        for (const child of this.children.values()) {
            results.push(...child.collectWords());
        }
        return results;
    }
}
