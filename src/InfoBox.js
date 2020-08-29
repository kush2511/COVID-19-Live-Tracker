import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

function InfoBox({title, cases, active, isActive, isDeath ,total, ...props}) {
    return (
        <Card onClick={props.onClick} className=
        {`
        infoBox ${active && 'infoBox--selected'}
        ${isActive && 'infoBox--Active'} 
        ${isDeath && 'infoBox--Death'}
        `}>
            <CardContent>
                <Typography  className="infoBox__title">
                    {title}
                </Typography>

                <h2 className={`
                infoBox__cases 
                ${props.className === 'app__active' && 'infoBox--active'}
                ${props.className === 'app__recover' && 'infoBox--recover'}
                ${props.className === 'app__death' && 'infoBox--death'}
                `}><CountUp prefix="+" redraw={true} delay={3} start={0} end={cases} duration={2.75} separator="," preserveValue={true}/></h2>

                <Typography  className="infoBox__total" color="textSecondary">
                    <CountUp prefix="+" suffix=" Total" redraw={true} start={0} end={total} duration={4} separator="," preserveValue={true}/>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
