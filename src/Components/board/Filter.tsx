import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../redux/store";

// import { actions } from "../../redux/slice/product";

export default function Filter() {
  // const dispatch = useDispatch<AppDispatch>();

  const [age, setAge] = useState("");

  const handleChange = (value: string): void => {
    setAge(value);

    // if (value === "Name") {
    //   dispatch(actions.sortNameAscending());
    // }
    // if (value === "Price") {
    //   dispatch(actions.sortPriceAscending());
    // }
    // if (value === "Category") {
    //   dispatch(actions.sortCategoryAscending());
    // }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        justifySelf: "flex-end",
      }}
    >
      <FormControl sx={{ width: "150px" }} size="small">
        <InputLabel id="demo-simple-select-label">Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Sort"
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value="Name">None</MenuItem>
          <MenuItem value="Price">Assignee</MenuItem>
          <MenuItem value="Category">Subtask</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
