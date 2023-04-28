import { useParams } from "react-router-dom"
import { useGetUserQuery } from "../../services/user"
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBack from "@mui/icons-material/ArrowBack";
import Phone from "@mui/icons-material/Phone";
import AlternateEmail from "@mui/icons-material/AlternateEmail";
import ContactMail from "@mui/icons-material/ContactMail";

import CircularProgress from '@mui/material/CircularProgress';
import { appRoutes } from "../../common/router";
import Alert from '@mui/material/Alert';
import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { openDialog } from "../../modules/dialog/actions";


const ProfilePage = () => {
    const dispatch = useDispatch()
    const { userId } = useParams()
    const { data, error, isLoading } = useGetUserQuery(userId)

    const onClick = useCallback(() => {
        dispatch(openDialog({params: {...data}}))
    }, [dispatch, data])

    return (
        <Box sx={{ flexGrow: 1, width: '100%', margin: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Link className="App-link" to={appRoutes.root.index}>
                        <Button variant="contained" startIcon={<ArrowBack />}>Home</Button>
                    </Link>
                </Grid>
                {error && <Alert severity="error">{error}</Alert>}
                {isLoading && <Grid item xs={12} display='flex' justifyContent='center' alignItems="center" height="300px">
                    <CircularProgress></CircularProgress>
                </Grid>}
                {!isLoading && (
                    <Grid item xs={12} key={data?.id} display='flex' justifyContent='center'>
                        <Card sx={{ minWidth: 600 }}>
                            { data?.avatar && <CardMedia
                                sx={{ height: 340, }}
                                image={data?.avatar}
                                title={data?.name}
                                onClick={onClick}
                            />}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" padding={1}>
                                    {data?.name}
                                </Typography>
                                <Typography as="div" variant="body2" color="text.secondary" alignItems="center" display="flex" padding={1}>
                                    <AlternateEmail /><Box marginLeft={1}>{data?.email}</Box>
                                </Typography>
                                <Typography as="div" variant="body2" color="text.secondary" alignItems="center" display="flex" padding={1}>
                                    <Phone /><Box marginLeft={1}>{data?.phone}</Box>
                                </Typography>
                                <Typography as="div" variant="body2" color="text.secondary" alignItems="center" display="flex" padding={1}>
                                    <ContactMail /><Box marginLeft={1}>{data?.address?.suite} • {data?.address?.street} • {data?.address?.city} • {data?.address?.zipcode}</Box>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default React.memo(ProfilePage)