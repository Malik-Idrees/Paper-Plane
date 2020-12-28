import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

function Icon({ name, size, color }) {
  color = color;
  return <MaterialIcons name={name} size={size} color={color} />;
}

export default Icon;
