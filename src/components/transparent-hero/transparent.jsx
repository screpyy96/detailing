import { Grid } from '@material-ui/core';

const Transparent = () => {
  return (
    <div style={{ height: '100vh', backgroundImage: 'url(https://i.shgcdn.com/1f9ae6c7-8573-492c-a4fc-eaf186e3d402/-/format/auto/-/preview/3000x3000/-/quality/lighter/)', backgroundSize: 'cover' }}>
      <div style={{ height: '20%', opacity: 0.8 }}>
        {/* any content here will be visible through the transparent layer */}
      </div>
      <Grid container style={{ height: '80%' }}>
        <h1>
            aia e
        </h1>
      </Grid>
    </div>
  );
};

export default Transparent;
