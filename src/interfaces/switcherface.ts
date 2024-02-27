import {SwitcherType} from "../types/switcherType";

export interface ISwitcher{
    theme:SwitcherType;
    toggleSwitcherTheme:()=>void
}