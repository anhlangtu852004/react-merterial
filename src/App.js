import React from "react";
import { Checkbox,FormGroup ,FormControlLabel   } from "@mui/material";
    import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
const App = () => {
    return ( 
        <>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        </>
     );
}
 
export default App;