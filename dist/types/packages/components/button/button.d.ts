import React from 'react';
/**============================= 设置 Button ============================= */
declare const Button: React.ForwardRefExoticComponent<Partial<{
    href: string;
    target?: string | undefined;
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
} & import("./type").BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, "type" | "onClick"> & {
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> & import("@kylin-ui/shared").ColorProps & import("@kylin-ui/shared").PaddingOrMarginProps & import("@kylin-ui/shared").PseudoProps> & React.RefAttributes<React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>>>;
export { Button };
