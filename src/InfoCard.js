import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import "./InfoCard.css";

function InfoCard({title, cases, total, ...props}) {
    return (
        <Card onClick={props.onClick} className="info-card">
            <CardContent>
                <Typography className="info-card-title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className="info-card-cases">{cases}</h2>
                <Typography className="info-card-total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoCard
