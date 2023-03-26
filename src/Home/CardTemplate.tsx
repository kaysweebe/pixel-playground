import { 
    Button,
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
    title: string,
    subtitle: string,
    paragraph: string,
    footer: string,
}

const CardTemplate = (props: CardTemplateProps) => {
    const {title, subtitle, paragraph, footer} = props
    const size = useContext(ResponsiveContext);

    return (
        <Card>
            <CardHeader pad="medium">
                <Heading level={2} margin="none">
                    { title }
                </Heading>
            </CardHeader>
            <CardBody pad="medium">
                <Paragraph>{ subtitle }</Paragraph>
                <Paragraph maxLines={size === "small" ? 3 : undefined}>
                    { paragraph }
                </Paragraph>
            </CardBody>
            <CardFooter pad="medium" background="background-contrast">
8               <Button label={footer} onClick={() => {}} {...props} />
            </CardFooter>
        </Card>
    )
}

export default CardTemplate;