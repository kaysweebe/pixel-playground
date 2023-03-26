import { 
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Paragraph,
    ResponsiveContext,
} from "grommet"
import { useContext } from "react"

interface CardTemplateProps {
    title: string
}

const CardTemplate = (props: CardTemplateProps) => {
    const {title} = props
    const size = useContext(ResponsiveContext);

    return (
        <Card>
            <CardHeader pad="medium">
                <Heading level={2} margin="none">
                    {title}
                </Heading>
            </CardHeader>
            <CardBody pad="medium">
                <Paragraph maxLines={size === "small" ? 3 : undefined}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                    porttitor non nulla ac vehicula. Aliquam erat volutpat. Mauris auctor
                    faucibus est at mattis. Aliquam a enim ac nisi aliquam consectetur et
                    ac velit. Mauris ut imperdiet libero.
                </Paragraph>
            </CardBody>
            <CardFooter pad="medium" background="background-contrast">
                Footer
            </CardFooter>
        </Card>
    )
}

export default CardTemplate;