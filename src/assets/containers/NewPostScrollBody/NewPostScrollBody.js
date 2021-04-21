import React from 'react'
import AddPhoto from '../AddPhoto/AddPhoto'
import './NewPostScrollBody.css'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function NewPostScrollBody() {
    const [value, setValue] = React.useState();
    const [category, setCategory] = React.useState('');

    const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    };

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <div className="new-post-scroll">
            <AddPhoto/>
            <form className="post-form" noValidate autoComplete="off">
                <TextField
                label="Title"
                multiline
                rows={2}
                variant="outlined"
                fullWidth={true}
                required={true}
                />
                <TextField
                className="text-field-margin"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                fullWidth={true}
                />

                <TextField label="Price" variant="outlined" required={true}/>
                
                <FormControl variant="outlined" className="text-field-margin">
                    <InputLabel>Category</InputLabel>
                    <Select
                        labelId="cat-select-outlined-label"
                        id="cat-select-outlined"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"3D Print"}>3D Print</MenuItem>
                        <MenuItem value={"Optimize STL"}>Optimize STL</MenuItem>
                        <MenuItem value={"CAD Design"}>CAD Design</MenuItem>
                        <MenuItem value={"Design Sketch"}>Design Sketch</MenuItem>
                        <MenuItem value={"Printer Repair"}>Printer Repair</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                </FormControl>


                <TextField label="Location" variant="outlined" />
                <TextField label="Phone" variant="outlined" />
                
                
                
            </form>
        </div>
    )
}

export default NewPostScrollBody
