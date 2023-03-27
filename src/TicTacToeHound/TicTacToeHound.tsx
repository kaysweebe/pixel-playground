import { Box, Grid, Header, PageContent, PageHeader, Paragraph } from "grommet"
import TicTacToeBoard from "./TicTacToeBoard"

const TicTacToeHound = () => {
    return (
        <PageContent>
            <Grid
                rows={['small', 'medium']}
                columns={['medium', 'medium']}
                gap="small"
                areas={[
                    { name: 'header', start: [0, 0, 0], end: [1, 0, 0] },
                    { name: 'image', start: [0, 1], end: [0, 1] },
                    { name: 'game', start: [1, 1], end: [1, 1] },
                ]}
                >
                <Box gridArea="header">
                    <PageHeader title="Tic-Tac-Toe Hound" />
                </Box>
                <Box gridArea="image" background="light-5">
                    <img 
                        alt="cute hound dog" 
                        src={require('../assets/images/hound-2.png')} 
                    />
                </Box>
                <Box gridArea="game" background="light-2">
                    <TicTacToeBoard />
                </Box>
            </Grid>
        </PageContent>
    )
}

export default TicTacToeHound