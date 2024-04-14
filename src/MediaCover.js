import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCover() {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', p: 0, m: 0 }}
    >

      <Card component="li" sx={{ Width: '100%', flexGrow: 1, borderRadius: 0, height:500 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            // poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="./video01.mp4"
              type="video/mp4"
            />
            {/* <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            /> */}
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            これはテストです
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}