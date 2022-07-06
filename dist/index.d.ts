interface Text {
    word: string;
    num: number;
}
declare function sayWord(text: Text): string;
declare function sayNum(text: Text, number?: number): number;

export { sayNum, sayWord };
