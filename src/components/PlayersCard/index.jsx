import { Grid, Paper, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  ":hover": {
    transform: 'scale(1.02)',
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
  }
}));

export function PlayersCard(props) {
  return <>
    <Grid item key={props.key} xs={12} md={6} >
      <Item>
        <Typography 
          component="b"
          
        >
          <b>{props.player.name}</b>
        </Typography>
        <Typography>
        {props.player.score}
        </Typography>
      </Item>
    </Grid>
  </>
}