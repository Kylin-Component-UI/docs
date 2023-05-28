import { AnchorButtonProps } from './AnchorButtonProps';
import { NativeButtonProps } from './NativeButtonProps';
import { AttributifyAttributes } from '@unocss/preset-attributify';
declare const ButtonTypes: readonly ["default", "primary", "secondary", "ghost", "dashed", "link", "text"];
export type ButtonType = (typeof ButtonTypes)[number];
declare const ButtonShape: readonly ["circle", "square", "round"];
export type ButtonShapeType = (typeof ButtonShape)[number];
declare const SizeType: readonly ["large", "middle", "small"];
export type ButtonSizeType = (typeof SizeType)[number];
declare const ButtonHTMLTypes: readonly ["submit", "button", "reset"];
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];
declare const colors: string[];
export type styleProps = {
    /** @deprecated */
    color: Readonly<typeof colors>;
};
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
export type CompoundedComponent = React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement> & AttributifyAttributes> & {
    /** @internal */
    __KYLIN_BUTTON: boolean;
};
export type LoadingConfigType = {
    loading: boolean;
    delay: number;
};
export type Loading = number | boolean;
export * from './BaseButtonProps';
