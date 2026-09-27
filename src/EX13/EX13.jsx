import React from "react";
import UserPosts from "./UserPosts";
import CountdownTimer from "./CountdownTimer";
import WindowSize from "./WindowSize";
import ValidatedInput from "./ValidatedInput";

export default function EX13() {
  return <><UserPosts /><CountdownTimer initialValue={10} /><WindowSize /><ValidatedInput /></>;
}
