import './App.css';
import store from '../../modules/store'
import { Provider } from 'react-redux'
import {
  RouterProvider,
} from "react-router-dom";
import router from '../../common/router';
import { faker } from '@faker-js/faker'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMemo } from 'react';
import { appContext } from '../../services/appContext';
import ModalDialog from '../../components/ModalDialog';


const App = () => {

  const contextValue = useMemo(() => {
    return {
      companyName: faker.company.name(),
      companyLogo: faker.image.business(100, 100, true),
      companyText: faker.lorem.paragraphs(),
    }
  }, [])

  return (
    <Provider store={store}>
      <div className="App">

        <appContext.Provider value={contextValue}>
          <Container maxWidth="sm">

            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={2}>
                <Avatar sx={{ width: 100, height: 100 }} src={contextValue.companyLogo} alt="logo" />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h3" component="div" marginLeft={4}>
                  {contextValue.companyName}
                </Typography>
              </Grid>
            </Grid>
            <RouterProvider router={router} />

          </Container>
        </appContext.Provider>

        <ModalDialog />
      </div>
    </Provider>
  );
}

export default App;
