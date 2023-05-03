import * as React from 'react';
export declare type LeftRightDialogHeaderProps = {
    className?: string;
    previous: (() => void) | null;
    next: (() => void) | null;
    close?: () => void;
};
declare const LeftRightDialogHeader: React.FC<LeftRightDialogHeaderProps>;
export { LeftRightDialogHeader };
