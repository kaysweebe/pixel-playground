import { 
    Box,
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
    link: string,
    image: string, 
    subtitle: string,
    paragraph: string,
    footer: string,
}

const CardTemplate = (props: CardTemplateProps) => {
    const {title, link, image, subtitle, paragraph, footer} = props
    const size = useContext(ResponsiveContext);
    console.log(`image: ${image}`)
    const imLink = 'hound.png'

    return (
        <Card>

                <Box background="light-5">
                        <img 
                            alt="cute hound dog" 
                            src={require('../assets/images/' + image)} 
                        />
                </Box>
            <CardHeader pad="medium">
                <Heading level={2} margin="none">
                    { title }
                </Heading>
            </CardHeader>
            <CardBody pad="medium">
                {/* <Paragraph>{ subtitle }</Paragraph> */}
                <Paragraph maxLines={size === "small" ? 3 : undefined}>
                    { paragraph }
                </Paragraph>
            </CardBody>
            <CardFooter pad="medium" background="background-contrast">
               <Button href={link} label={footer} onClick={() => {}} {...props} />
            </CardFooter>
        </Card>
    )
}

export default CardTemplate;