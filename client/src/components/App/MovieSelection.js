import * as React from 'react';

//MUI Select
import Select from "@mui/material/Select";

//MUI Menu Item
import MenuItem from "@mui/material/MenuItem";

//MUI Typography Element
import Typography from "@mui/material/Typography";

const MovieSelection = ({ movies, selectedMovie, handleMovieChange, showSelectError }) => {
  return (
    <div>
      <Typography variant="subtitle1">Select a movie:</Typography>
      <Select
        value={selectedMovie}
        onChange={handleMovieChange}
        displayEmpty
        fullWidth
        error={showSelectError}
      >
        <MenuItem value="" disabled>
          Select a movie
        </MenuItem>
        {movies.map((title, index) => (
          <MenuItem key={index} value={title}>
            {title}
          </MenuItem>
        ))}
      </Select>
      {showSelectError && (
        <Typography variant="subtitle2" style={{ color: "red" }}>
          Select your movie
        </Typography>
      )}
    </div>
  );
}

export default MovieSelection;
