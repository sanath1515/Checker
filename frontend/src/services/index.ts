import React from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

export const fetchActions = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/v1/adverseactions/allCandidates`
    );
    const actions = response.data;
    console.log(response.data);
    return actions;
  } catch (error) {
    console.log("error occured while fetching Adverse actions" + error);
    throw new Error("failed to fetch Adverse actions");
  }
};

export const getCandidatesData = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/v1/candidates`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const Fetch_CourtData = async () => {
  const res = await axios.get(`${API_URL}/courtSearches`);
  return res.data;
};

export const retrieveCandidateById = async (candidateId: string) => {
  const response = await axios.get(
    `${API_URL}/api/v1/candidates/${candidateId}`
  );
  return response.data;
};

export const updateCandidateAdjudication = async (
  candidateId: string,
  adjudication: string
) => {
  await axios.patch(
    `${API_URL}/api/v1/candidates/${candidateId}`,
    {
      adjudication: adjudication,
    }
  );
};
