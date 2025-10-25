import * as React from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
    return (
        <DialogContext.Provider value={{ open, onOpenChange }}>
            {children}
        </DialogContext.Provider>
    );
}

const DialogContext = React.createContext<{
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}>({});

export function DialogTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
    const { onOpenChange } = React.useContext(DialogContext);

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            onClick: () => onOpenChange?.(true),
        } as React.HTMLAttributes<HTMLElement>);
    }

    return (
        <button onClick={() => onOpenChange?.(true)}>
            {children}
        </button>
    );
}

export function DialogContent({ children, className }: { children: React.ReactNode; className?: string }) {
    const { open, onOpenChange } = React.useContext(DialogContext);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-black/50"
                onClick={() => onOpenChange?.(false)}
            />
            <div className={cn(
                "relative bg-background rounded-lg shadow-lg max-h-[90vh] overflow-hidden",
                className
            )}>
                {children}
            </div>
        </div>
    );
}

export function DialogHeader({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("flex flex-col space-y-1.5 p-6 border-b", className)}>
            {children}
        </div>
    );
}

export function DialogTitle({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <h2 className={cn("text-lg font-semibold", className)}>
            {children}
        </h2>
    );
}
