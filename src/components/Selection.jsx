import React from "react";
import { useState } from "react";
import {
  Box,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  HStack,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Selection = () => {
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);
  const [values, setValues] = useState([0, 6]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const statesselector = (selectedOption) => {
    if (
      selectedOption === "today" ||
      selectedOption === "yesterday"
    ) {
      return (
        <Box pb={"15.6em"}>
          Hora:
          <RangeSlider
            defaultValue={[0, 6]}
            min={0}
            max={24}
            step={1}
            values={values}
            minStepsBetweenThumbs={1}
            onChange={(newvalue) => setValues(newvalue)}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb
              boxSize={6}
              key={0}
              index={0}
              value={values[0]}
              children={values[0]}
            />
            <RangeSliderThumb
              boxSize={6}
              key={1}
              index={1}
              value={values[1]}
              children={values[1]}
            />
          </RangeSlider>
        </Box>
      );
    } else if (selectedOption === "Custom") {
      return (
        <>
          <Box pb={"20px"}>
            Hora:
            <RangeSlider
              defaultValue={[0, 6]}
              min={0}
              max={24}
              step={1}
              values={values}
              minStepsBetweenThumbs={1}
              onChange={(newvalue) => setValues(newvalue)}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb
                boxSize={6}
                key={0}
                index={0}
                value={values[0]}
                children={values[0]}
              />
              <RangeSliderThumb
                boxSize={6}
                key={1}
                index={1}
                value={values[1]}
                children={values[1]}
              />
            </RangeSlider>
          </Box>
          <Box>
            Fecha:
            <HStack p="20px" spacing={"5px"} pb="8.4em">
              <Box>
                Fecha inicio
                <DatePicker
                  selected={StartDate}
                  onChange={(date) => setStartDate(date)}
                  placeholder="inicio"
                  dateFormat="dd/MM/yyyy"
                />
              </Box>
              <Box>
                Fecha final
                <DatePicker
                  selected={EndDate}
                  onChange={(date) => setEndDate(date)}
                  placeholder="final"
                  dateFormat="dd/MM/yyyy"
                />
              </Box>
            </HStack>
          </Box>
        </>
      );
    } else {
      return <Box pb={"19em"}></Box>;
    }
  };
  return (
    <>
      <Box>
        <Select
          onChange={handleOptionChange}
          placeholder="Seleccione un filtro"
        >
          <option value="today">Hoy</option>
          <option value="yesterday">Ayer</option>
          <option value="week">Esta semana</option>
          <option value="month">Este mes</option>
          <option value="year">Este año</option>
          <option value="Custom">Mas opciones</option>
        </Select>
      </Box>
      <Box pt={"10px"}>{statesselector(selectedOption)}</Box>
    </>
  );
};
export default Selection;
