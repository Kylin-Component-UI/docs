declare const colors: readonly ["green", "red", "purple", "yellow", "blue", "indigo", "pink", "gray", "black", "white"];
type range = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type presetMode = 'base' | 'medium' | 'large';
export type ColorProps = {
    color?: (typeof colors)[number];
    bg?: (typeof colors)[number];
    hover?: (typeof colors)[number];
};
export type PaddingOrMarginProps = {
    p?: range;
    pl?: range;
    pr?: range;
    px?: range;
    py?: range;
    m?: range;
    ml?: range;
    mr?: range;
    mx?: range;
    my?: range;
};
export type PseudoProps = {
    hover?: (typeof colors)[number];
};
export {};
