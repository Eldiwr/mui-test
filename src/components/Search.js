import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
        label="serach"
        variant="standard"
        fullWidth
        type="search"
        value={value}
        onChange={onChange}
        sx={{mt: "3.5rem", mb:"1.5rem"}}
        />;
};

export default Search;