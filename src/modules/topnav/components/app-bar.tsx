import { AppBar as MuiAppBar, FormControl, FormControlLabel, Radio, RadioGroup, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useThemeMode } from "../../../theme";

export const AppBar: React.FC = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <MuiAppBar>
      <Toolbar>
        <FormControl>
          <RadioGroup
            row
            value={mode}
            onChange={toggleMode}
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
          </RadioGroup>
        </FormControl>
      </Toolbar>
    </MuiAppBar>
  )
}