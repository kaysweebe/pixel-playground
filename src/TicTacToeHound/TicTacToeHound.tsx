import { Box, Grid, Header, PageContent, PageHeader } from "grommet"
import TicTacToeBoard from "./TicTacToeBoard"

const TicTacToeHound = () => {
    return (
        <PageContent>
            <Grid
                rows={['small', 'medium']}
                columns={['medium', 'medium']}
                gap="small"
                areas={[
                    { name: 'header', start: [0, 0], end: [1, 0] },
                    { name: 'nav', start: [0, 1], end: [0, 1] },
                    { name: 'main', start: [1, 1], end: [1, 1] },
                ]}
                >
                <Box gridArea="header">
                    <PageHeader title="Tic-Tac-Toe Hound" />
                </Box>
                <Box gridArea="nav" background="light-5">
                    <img 
                        alt="cute hound dog" 
                        src={require('../assets/images/hound-2.png')} 
                    />
                </Box>
                <Box gridArea="main" background="light-2">
                    <TicTacToeBoard />
                </Box>
            </Grid>
        </PageContent>
    )
}

export default TicTacToeHound