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
    "link": "/tic-tac-toe-hound",
    "image": "hound-2.png",
    "subtitle": "Couch play Tic-Tac-Toe",
    "paragraph": "Introducing Tic Tac Toe Hound, the ultimate twist on a classic game! This new version adds a furry companion to the mix, as players must strategically place their X's and O's to win over the heart of a playful hound. With challenging gameplay and adorable graphics, Tic Tac Toe Hound is the perfect game for all ages. So get ready to unleash your competitive side in Tic Tac Toe Hound!",
    "footer": "Play"
  },
  {
    "title": "Connect X",
    "link": "/connect-x",
    "image": "connect-x.png",
    "subtitle": "Connect 4, Connect 5, Connect X",
    "paragraph": "Get ready for a thrilling game of Connect X, where you can connect not only 4, but 5 or even an X! With its colorful pieces and strategic gameplay, Connect X will have you on the edge of your seat as you try to outsmart your opponent and connect your pieces in a row before they do. Will you be able to connect 5 in a row or even an X, or will your opponent outmaneuver you and claim victory? Get ready to find out in Connect X!",
    "footer": "Play",
  },
  {
    "title": "Gamer Life",
    "link": "/",
    "image": "game-life.png",
    "subtitle": "Connect with friends. Share content. Enjoy.",
    "paragraph": "",
    "footer": "Join Now",
  }
]

const HomePage = () => {

    return (
        <PageContent>
        <PageHeader title="Welcome to Pixel Playland!" />
        <Grid columns="medium" gap="large" pad={{ bottom: "large"}}>
          {
            content.map((c) => 
              <CardTemplate
                title={c.title}
                link={c.link}
                image={c.image}
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