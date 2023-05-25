"use client";
import React from "react";

async function getRepository() {
  const result = await fetch("https://api.github.com/users/ryanfavour4/repos");
  const response = await result.json();
  return response;
}

export const useGetGithubRepo = () => {
  const gitHubRepo = getRepository();
  return { gitHubRepo };
};
