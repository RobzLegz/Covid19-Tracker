import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import "./InfoCard.css";

function InfoCard({title, cases, total, active, isGray, isRed, isBlue, ...props}) {
    return (
        <Card onClick={props.onClick} className={`info-card ${active && "infoBox--selected"} ${isRed && "infoBox--red"} ${isGray && "infoBox--gray"}`}>
            <CardContent>
                <Typography className="info-card-title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`info-card-cases ${!isRed & !isGray && "infobox-cases--green"} ${!isRed & !isBlue && "infobox-cases--gray"}`}>{cases}</h2>
                <Typography className="info-card-total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoCard
