import {createContext} from "react";
import {ISwitcher} from "../interfaces/switcherface";

const  SwitcherContext = createContext<ISwitcher |undefined >(undefined)
