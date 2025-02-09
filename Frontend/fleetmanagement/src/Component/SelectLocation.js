// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SelectLocation() {
//   const [searchType, setSearchType] = useState("city");
//   const [searchValue, setSearchValue] = useState("");
//   const navigate = useNavigate();

//   const handleContinue = () => {
//     if (!searchValue.trim()) {
//       alert("Please enter a City ID or Airport Code.");
//       return;
//     }
//     navigate("/hub-selection", { state: { searchType, searchValue } });
//   };

//   return (
//     <div>
//       <h2>Select Location</h2>
//       <label>
//         <input type="radio" value="city" checked={searchType === "city"} onChange={() => setSearchType("city")} />
//         Search by City ID
//       </label>
//       <label>
//         <input type="radio" value="airport" checked={searchType === "airport"} onChange={() => setSearchType("airport")} />
//         Search by Airport Code
//       </label>
//       <input type="text" placeholder="Enter ID or Code" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
//       <button onClick={handleContinue}>Continue</button>
//     </div>
//   );
// }

// export default SelectLocation;








// import React, { useState } from "react";
// import {
//   Container,
//   Box,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   Stack,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";
// import SelectLocationNavbar from "./SelectLocationNavbar";
// import HeaderButton from "./HeaderButton";
// import { locations } from "../../ApiEndPoints";
// import { useNavigate } from "react-router-dom";

// const Selectlocation = () => {
//   const theme = useTheme();
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const navigate = useNavigate("");
//   const handleChange = (event) => {
//     setSelectedLocation(event.target.value);
//   };

//   const handelNavigate = () => {
//     navigate("/SelectCarOption");
//   };
//   return (
//     <Container>
//       <Box>
//         <SelectLocationNavbar />
//         <HeaderButton />
//         <Box mt={4}>
//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             color={theme.palette.primary.main}
//             gutterBottom
//           >
//             Location Selection
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             <b>Select a Pick-up / Return location.</b>
//           </Typography>
//           <Typography variant="body2" color="text.secondary" mb={2}>
//             Your location description Waltham has 3 matches. Please select one.
//           </Typography>

//           <FormControl component="fieldset">
//             <RadioGroup value={selectedLocation} onChange={handleChange}>
//               <Stack spacing={2} sx={{ mt: 3 }}>
//                 {locations.map((location) => (
//                   <Card
//                     key={location.id}
//                     variant="outlined"
//                     sx={{
//                       p: 3,
//                       borderRadius: 3,
//                       transition: "all 0.4s ease-in-out",
//                       backgroundColor:
//                         selectedLocation === location.id
//                           ? theme.palette.secondary.light
//                           : "#fff",
//                       boxShadow:
//                         selectedLocation === location.id
//                           ? "0px 6px 15px rgba(0, 0, 0, 0.2)"
//                           : "0px 3px 8px rgba(0, 0, 0, 0.1)",
//                       "&:hover": {
//                         backgroundColor: theme.palette.action.hover,
//                         transform: "scale(1.05)",
//                         boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
//                       },
//                     }}
//                   >
//                     <CardContent>
//                       <FormControlLabel
//                         value={location.id}
//                         control={
//                           <Radio sx={{ color: theme.palette.primary.main }} />
//                         }
//                         label={
//                           <Box>
//                             <Typography
//                               variant="h6"
//                               fontWeight="bold"
//                               color={theme.palette.primary.dark}
//                             >
//                               {location.name} - {location.id}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                               {location.address}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                               <b>Phone:</b> {location.phone}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                               <b>Hours:</b> {location.hours}
//                             </Typography>
//                           </Box>
//                         }
//                       />
//                     </CardContent>
//                   </Card>
//                 ))}
//               </Stack>
//             </RadioGroup>
//           </FormControl>
//         </Box>
//       </Box>
//       <Box
//         mt={4}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         gap={2}
//       >
//         <Button variant="contained" onClick={handelNavigate}>
//           Continue Booking
//         </Button>
//         <Button variant="contained">Cancel</Button>
//       </Box>
//     </Container>
//   );
// };

// export default Selectlocation;









import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
// import { locations } from "../../ApiEndPoints";
import { useNavigate } from "react-router-dom";

const SelectLocation = () => {
const [locations, setlocations] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <Container className="mt-4">
      <h5 className="fw-bold">Select a Pick-up / Return location</h5>
      <Form>
        {locations.map((location) => (
          <Form.Check
            key={location.id}
            type="radio"
            name="location"
            value={location.id}
            label={location.name}
            onChange={handleChange}
          />
        ))}
      </Form>
      <div className="mt-4 d-flex justify-content-center gap-2">
        <Button variant="primary" onClick={() => navigate("/SelectCarOption")}>Continue</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </Container>
  );
};

export default SelectLocation;

