import { 
    Grid, 
    Page, 
    PageContent, 
    PageHeader, 
    Text 
} from "grommet";
import CardTemplate from "./CardTemplate";

const content = [
  {
    "title": "Tic-Tac-Toe Hound",
    "subtitle": "Couch play Tic-Tac-Toe",
    "paragraph": "Introducing Tic Tac Toe Hound, the ultimate twist on a classic game! This new version adds a furry companion to the mix, as players must strategically place their X's and O's to win over the heart of a playful hound. With challenging gameplay and adorable graphics, Tic Tac Toe Hound is the perfect game for all ages. So get ready to unleash your competitive side in Tic Tac Toe Hound!",
    "footer": "Play Now"
  },
  {
    "title": "Connect X",
    "subtitle": "Connect 4, Connect 5, Connect X",
    "paragraph": "A couch play game. Grab a friend. See who can connect 4, connect 5, and connect X.",
    "footer": "",
  },
  {
    "title": "Gamer Life",
    "subtitle": "Connect with friends. Share content. Enjoy.",
    "paragraph": "",
    "footer": "Join Now",
  }
]

const HomePage = () => {

    return (
        <PageContent>
        <PageHeader title="Welcome to the Gamer Space!" />
        <Grid columns="medium" gap="large" pad={{ bottom: "large"}}>
          {
            content.map((c) => 
              <CardTemplate
                title={c.title}
                subtitle={c.subtitle}
                paragraph={c.paragraph}
                footer={c.footer}
              />
            )
          }
          
        </Grid>
      </PageContent>
    )
}

export default HomePage