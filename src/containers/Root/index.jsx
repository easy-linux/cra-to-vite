import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { appRoutes } from '../../common/router';
import Typography from '@mui/material/Typography';
import { faker } from '@faker-js/faker'
import { appContext } from '../../services/appContext';
import { useContext } from 'react';

const Root = () => {
    const appValues = useContext(appContext)
    return (
        <Box sx={{ flexGrow: 1, width: '100%', margin: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="div">
                        {appValues?.companyName}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" component="div">
                        {faker.lorem.paragraph(2)}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" component="div">
                        {faker.lorem.paragraph(2)}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                        {faker.lorem.paragraph()}
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link className="App-link" to={appRoutes.users.index}>
                    <Button variant="contained" sx={{margin: '10px'}} >Users</Button>
                </Link>

                <Link className="App-link" to={appRoutes.about.index}>
                    <Button variant="contained"  sx={{margin: '10px'}} >About</Button>
                </Link>
            </Box>
        </Box>

    )
}

export default Root