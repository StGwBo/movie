import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const DEFAULT_MIN_DISTANCE = 10;
const DEFAULT_YEAR = [2010, 2024];
const DEFAULT_CURRENT_YEAR = new Date().getFullYear();
const marks = [{ value: 1950 }, { value: 1960 }, { value: 1980 }, { value: 2000 }, { value: 2020 }, { value: 2024 }];

function SliderYears() {
    const [value, setValue] = useState(DEFAULT_YEAR);

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number): void => {
        -event;
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < DEFAULT_MIN_DISTANCE) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], DEFAULT_CURRENT_YEAR - DEFAULT_MIN_DISTANCE);
                setValue([clamped, clamped + DEFAULT_MIN_DISTANCE]);
            } else {
                const clamped = Math.max(newValue[1], 1950 + DEFAULT_MIN_DISTANCE);
                setValue([clamped - DEFAULT_MIN_DISTANCE, clamped]);
            }
        } else {
            setValue(newValue);
        }
    };

    return (
        <Box sx={{ width: 268, height: 137 }}>
            <Typography sx={{ height: 56 }}>Год релиза:</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Slider
                    // getAriaLabel={() => "Minimum distance shift"}
                    min={1950}
                    max={2024}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                    disableSwap
                    marks={marks}
                    sx={{ width: 255 }}
                />
            </Box>
        </Box>
    );
}

export { SliderYears };
