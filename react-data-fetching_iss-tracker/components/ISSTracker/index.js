import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const res = await fetch(URL);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function ISSTracker() {
  const { data, error, isLoading } = useSWR(URL, fetcher, {
    refreshInterval: 1000,
  });

  if (error) return <h1>Failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

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
