import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
    root: {
        position: "fixed",
        bottom: "0",
        width: "100%",
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    const handleClick = (to: string) => {
        history.replace(to);
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction onClick={() =>handleClick('/')} label="Nowe" icon={<LineWeightIcon />} />
            <BottomNavigationAction onClick={() =>handleClick('/task')} label="Nieukończone" icon={<RestoreIcon />} />
            <BottomNavigationAction onClick={() =>handleClick('/add')} label="Dodaj" icon={<AddIcon />} />
        </BottomNavigation>
    );
}