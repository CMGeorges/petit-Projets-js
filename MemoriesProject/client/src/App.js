import React, {useEffect,useState} from 'react';

import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import  { useDispatch } from 'react-redux';
import { getPosts} from './actions/posts';
import memories from './images/memories.png';
import useStyles from'./styles.js';

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {        
        dispatch(getPosts());
    },[currentId,dispatch]);
    return ( <Container maxidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography  className={classes.heading} variant="h2" align="center"> Memories
        </Typography>
        <img  className={classes.image} src={ memories } alt="memories" height="60" />
    </AppBar>
    <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing="10px">
                <Grid item xs={ 12 } sm={ 4 }>
                    <Posts />

                </Grid>
                <Grid item xs={ 12 } sm={ 4 }>
                    <Form />
                </Grid>
            </Grid>
        </Container>
    </Grow>

</Container>

    );
}

export default App;