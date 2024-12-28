import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
