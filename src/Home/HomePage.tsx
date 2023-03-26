import { 
    Grid, 
    Page, 
    PageContent, 
    PageHeader, 
    Text 
} from "grommet";
import CardTemplate from "./CardTemplate";

const HomePage = () => {

    return (
        <PageContent>
        <PageHeader title="Welcome to the Gamer Space!" />
        <Grid columns="medium" gap="large" pad={{ bottom: "large"}}>
          <CardTemplate title={"Tic-Tac-Toe Hound?"} />
          <CardTemplate title={"Can't get enough online Connect Four?"} />
          <CardTemplate title={"Gamer Life"} />
        </Grid>
      </PageContent>
    )
}

export default HomePage