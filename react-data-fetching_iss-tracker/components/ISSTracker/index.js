import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = async (url) => {
  const res = await fetch(URL);
  return res.json();
};

export default function ISSTracker() {
  const { data, error, isLoading } = useSWR(URL, fetcher, {
    refreshInterval: 1000,
  });

  async function getISSCoords() {

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
