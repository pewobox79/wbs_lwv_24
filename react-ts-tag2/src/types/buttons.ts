import { ColorPalete } from "./globals"

export type TsButtonType = {
    backgroundColor: ColorPalete,
    padding: [number, number?, number?, number?],
    color?: ColorPalete,
    fontSize?: number
}

export type StyleButtonType = {
    text: string,
    myStyle: React.CSSProperties
}

// intersection
export type ButtonWithHandler = StyleButtonType & {
    handler: () => void
}



// Interface

export interface ButtonInterface {
    text: string,
    handler: () => void
}

export interface ButtonWithStyle extends ButtonInterface {
    style: React.CSSProperties
}


