import Image from "next/image";

export function ImageComponent({ src, size = "small", alt }: { src: string; size?: string; alt: string }) {
    return (
        <>
            <Image 
                src={src}
                height={size === "small" ? 600 : 700}
                width={size === "small" ? 600 : 700}
                alt={alt}
                className={`w-96 sm:w-[${size === "small" ? 600 : 700}px]`}
            />
        </>
    );
}
