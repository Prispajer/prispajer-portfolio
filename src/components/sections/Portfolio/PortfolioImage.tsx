import type {PortfolioItem} from "@/types/portfolio.ts";

type PortfolioImageProps = Pick<PortfolioItem, "name" | "image">;


const PortfolioImage = ({name, image}: PortfolioImageProps) => {
    return (
        <div className="relative h-64 md:h-72 overflow-hidden">
            {image ? (
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            ) : (
                <img
                    src={"./images/Placeholder.png"}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
    )
}

export default PortfolioImage