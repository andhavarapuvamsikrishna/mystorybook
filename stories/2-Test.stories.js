import React from "react";
import App from "../src/App";
import Tablecomimpl from "../src/tablecomponent/Tablecomimpl";
import Textarea from "../src/textareacomponent/Textarea";
import Button from "../src/buttoncomponent/Button";
export default {
  title: "Test",
};

export const textarea = () => <Textarea />;
export const table = () => <Tablecomimpl />;
export const counter = () => <Button />;
export const app = () => <App />;
