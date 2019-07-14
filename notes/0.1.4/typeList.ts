type BallSelect = 'basketball' | 'footerball';
interface BallAttr {
    name: string;
    people: number;
}
type Ball2 = {
    [ball in BallSelect]: BallAttr
}
