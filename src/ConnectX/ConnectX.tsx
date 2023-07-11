import { Box, Grid, PageContent, PageHeader } from "grommet"
import { ConnectXGame } from "./ConnectXGame"

const ConnectX = () => {
    return (
        <PageContent>
            <Grid
                rows={['small', 'medium']}
                columns={['medium', 'large']}
                gap="small"
                areas={[
                    { name: 'header', start: [0, 0], end: [1, 0] },
                    { name: 'image', start: [0, 1], end: [0, 1] },
                    { name: 'game', start: [1, 1], end: [1, 1] },
                ]}
                >
                <Box gridArea="header">
                    <PageHeader title="Connect X" />
                </Box>
                <Box gridArea="image" background="light-5">
                    <img 
                        alt="cute hound dog" 
                        src={require('../assets/images/connect-x.png')} 
                    />
                </Box>
                <Box gridArea="game" background="light-2">
                    <ConnectXGame />
                </Box>
            </Grid>
        </PageContent>
    )
}

export default ConnectX