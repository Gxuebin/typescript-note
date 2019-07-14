import * as AModule from './a';
import * as BModule from './b';
import * as XXXModule from './xxx';
import * as ZModule from './z';

declare namespace Modules {
    export type AInterface = AModule.AInterface;
    export type BInterface = BModule.BInterface;
    export type XXXInterface = XXXModule.XXXInterface;
    export type ZInterface = ZModule.ZInterface;
}
