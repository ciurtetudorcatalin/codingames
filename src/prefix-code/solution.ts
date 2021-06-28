export function solve(encoding: Map<string, number>, code: string): string {
    let solution = '';
    let currentIndex = 0;
    const keys = Array.from(encoding.keys());
    while (currentIndex < code.length) {
        const currentToken = code.substring(currentIndex);
        let matched = false;
        for (const key of keys) {
            if (currentToken.startsWith(key)) {
                matched = true;
                currentIndex += key.length;
                solution += String.fromCharCode(encoding.get(key) as number);
                break;
            }
        }
        if (!matched) {
            solution = `DECODE FAIL AT INDEX ${currentIndex}`;
            break;
        }
    }

    return solution;
}
