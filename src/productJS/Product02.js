import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import p01 from '../images/products/img_01.png';

export default function Product02() {
    return (
        <div className="flex flex-row">
        <Card
          variant="soft"
          size="sm"
        //   sx={{
        //     flexDirection: { xs: 'row', md: 'column' },
        //     minWidth: { xs: '100%', md: 'auto' },
        //     gap: 1,
        //   }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img alt="" src={ p01 } />
            {/* <img alt="" src="/static/blog/mui-product-comparison/ecosystem.png" /> */}
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
            <Typography level="body-xs">Blog post</Typography>
          </CardContent>
        </Card>
        <Card
          variant="soft"
          size="sm"
        //   sx={{
        //     flexDirection: { xs: 'row', md: 'column' },
        //     minWidth: { xs: '100%', md: 'auto' },
        //     gap: 1,
        //   }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img alt="" src={ p01 } />
            {/* <img alt="" src="/static/blog/mui-product-comparison/ecosystem.png" /> */}
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
            <Typography level="body-xs">Blog post</Typography>
          </CardContent>
        </Card>
        <Card
          variant="soft"
          size="sm"
        //   sx={{
        //     flexDirection: { xs: 'row', md: 'column' },
        //     minWidth: { xs: '100%', md: 'auto' },
        //     gap: 1,
        //   }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img alt="" src={ p01 } />
            {/* <img alt="" src="/static/blog/mui-product-comparison/ecosystem.png" /> */}
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
            <Typography level="body-xs">Blog post</Typography>
          </CardContent>
        </Card>
        </div>
    );
}




