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
  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);
  const [values, setValues] = useState([0, 6]);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const statesselector = (selectedOption) => {
    let page1 = "";
    let page2 = "";
    let page3 = "";
    if (
      selectedOption === "today" ||
      selectedOption === "yesterday" ||
      selectedOption === "Custom"
    ) {
      page1 = (
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
            <RangeSliderThumb boxSize={6} key={0} index={0} children={values[0]}/>
            <RangeSliderThumb boxSize={6} key={1} index={1} children={values[1]} />
          </RangeSlider>
        </Box>
      );
    }
    if (selectedOption === "Custom") {
      page2 = (
        <Box>
          Fecha:
          <HStack p="20px" spacing={"5px"}>
            <Box>
              Fecha inicio
              <DatePicker
                selected={startDate}
                onChange={(startDate) => setStartDate(startDate)}
                placeholder="inicio"
              />
            </Box>
            <Box>
              Fecha final
              <DatePicker
                selected={EndDate}
                onChange={(EndDate) => setEndDate(EndDate)}
                placeholder="final"
              />
            </Box>
          </HStack>
        </Box>
      );
    }
    if (
      selectedOption === "week" ||
      selectedOption === "month" ||
      selectedOption === "year" ||
      selectedOption === null
    ) {
      page3 = <Box pb={"150px"}></Box>;
    }
    const page = [page1, page2, page3];
    return page;
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
