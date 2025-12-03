import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";

const AboutTechnology = ({technology, index} : {technology: {
        image: string
        name: string
        borderColor: string
        alt: string
    }, index: number}) => {
    return (
        <Card
            key={index}
            className="min-w-45 min-h-22 border-0 py-2 z-10"
            style={{
                boxShadow: `
                  4px 4px 10px ${technology.borderColor},
                  -4px 4px 10px ${technology.borderColor},
                  4px -4px 10px ${technology.borderColor},
                  -4px -4px 10px ${technology.borderColor}
                `,
                opacity: 1,
            }}
        >
            <CardContent className="flex flex-col items-center justify-center">
                <img className="max-w-15" alt={technology.alt} src={technology.image} />
                <CardTitle className="font-buttons">{technology.name}</CardTitle>
            </CardContent>
        </Card>
    )
}

export default AboutTechnology;