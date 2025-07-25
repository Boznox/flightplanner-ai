
import React, { useState } from "react";

export default function App() {
  const [aircraft, setAircraft] = useState("A320");
  const [region, setRegion] = useState("Europe");
  const [duration, setDuration] = useState("1.5");
  const [generated, setGenerated] = useState(false);

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "1rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Generate a Real-World Flight Plan
      </h1>

      <div style={{ marginTop: "1rem" }}>
        <label>Aircraft Type</label>
        <select value={aircraft} onChange={(e) => setAircraft(e.target.value)}>
          <option value="A320">Airbus A320</option>
          <option value="B737">Boeing 737</option>
          <option value="C172">Cessna 172</option>
          <option value="TBM9">TBM 900</option>
          <option value="DA62">Diamond DA62</option>
        </select>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label>Flight Duration (hours)</label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="0.5">30 min</option>
          <option value="1.0">1 hour</option>
          <option value="1.5">1.5 hours</option>
          <option value="2.0">2 hours</option>
          <option value="3.0">3+ hours</option>
        </select>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label>Region</label>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Australia">Australia</option>
        </select>
      </div>

      <button
        style={{ marginTop: "1rem", width: "100%", padding: "0.75rem" }}
        onClick={() => setGenerated(true)}
      >
        Generate Route
      </button>

      {generated && (
        <div style={{ background: "#fff", padding: "1rem", marginTop: "2rem", borderRadius: "8px", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            Generated Flight Plan
          </h2>
          <p><strong>Aircraft:</strong> {aircraft}</p>
          <p><strong>Duration:</strong> ~{duration} hours</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Departure:</strong> EDDM (Munich)</p>
          <p><strong>Arrival:</strong> LIRF (Rome Fiumicino)</p>
          <p><strong>Route:</strong> MUN VADAR UL604 ABESI LIRF</p>
          <button style={{ marginRight: "0.5rem" }}>Export to SimBrief</button>
          <button>Download PDF</button>
        </div>
      )}
    </div>
  );
}
