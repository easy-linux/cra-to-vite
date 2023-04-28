import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBack from "@mui/icons-material/ArrowBack";
import { faker } from '@faker-js/faker'
import { appRoutes } from "../../common/router";
import { Link } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import { appContext } from '../../services/appContext';



const About = () => {
    const appValues = useContext(appContext)
    const longName = useMemo(()=>{
        return `${appValues?.companyName} ${faker.company.companySuffix()}`
    }, [appValues])
    return (
        <Box sx={{ flexGrow: 1, width: '100%', margin: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Link className="App-link" to={appRoutes.root.index}>
                        <Button variant="contained" startIcon={<ArrowBack />}>Home</Button>
                    </Link>
                </Grid>

                <Grid item xs={12} display='flex' justifyContent='center'>
                    <Card sx={{ minWidth: 600 }}>
                        <CardMedia
                            sx={{ height: 340, }}
                            image={faker.image.cats(640, 480, true)}
                            title={appValues?.companyName}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                                {longName}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {faker.company.catchPhrase()}
                            </Typography>
                            
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}

export default About