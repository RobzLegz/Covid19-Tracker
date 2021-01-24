import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
function InfoCard({title, cases, total}) {
    return (
        <Card className="info-card">
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
