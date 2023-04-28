import { useState } from "react"
import { useGetAllUsersQuery } from "../../services/users"
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import CircularProgress from '@mui/material/CircularProgress';
import { appRoutes } from "../../common/router";
import Alert from "@mui/material/Alert";
import Rating from '@mui/material/Rating';


const Users = () => {
    const [page, setPage] = useState(1)
    const { data, error, isLoading } = useGetAllUsersQuery(page)

    const onClickNext = () => {
        setPage((page) => {
            if (data?.length) {
                return page + 1
            }
            return page
        })
    }

    const onClickPrev = () => {
        setPage((page) => {
            if (page > 1) {
                return page - 1
            }
            return page
        })
    }

    return (
        <Box sx={{ flexGrow: 1, width: '100%', margin: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{display: 'flex', justifyContent:'space-between', alignItems:"center", width: "100%"}}> 
                    
                        <Link className="App-link" to="/">
                            <Button variant="contained" startIcon={<ArrowBack />}>Back</Button>
                        </Link>
                        <Box>
                            <LoadingButton variant="contained" startIcon={<ArrowBack />} onClick={onClickPrev} loading={isLoading} >Prev page</LoadingButton>
                            <LoadingButton variant="contained" sx={{marginLeft: 1}} endIcon={<ArrowForward />} onClick={onClickNext} loading={isLoading}>Next page</LoadingButton>
                        </Box>
                  
                </Grid>
                {error && <Alert severity="error">{error}</Alert>}
                {isLoading && <Grid item xs={12} display='flex' justifyContent='center' alignItems="center" height="300px">
                    <CircularProgress></CircularProgress>
                </Grid>}
                {!isLoading && data.map((user => (
                    <Grid item xs={4} key={user.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 100 }}
                                image={user.avatar}
                                title={user.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {user.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {user.email}
                                </Typography>
                                <Typography component="legend">Rating</Typography>
                                <Rating name="Rating" value={Math.random() * 5} readOnly/>
                            </CardContent>
                            <CardActions>
                                <Link className="App-link" to={`${appRoutes.profile.index}/${user.id}`}>
                                    <Button size="small">Learn More</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                )))}
            </Grid>
        </Box>
    )
}

export default Users