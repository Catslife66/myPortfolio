import React from "react";

export default function ProjectItem() {
  return (
    <div className="w-full flex flex-col">
      <div className="text-[40px] w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quis?
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore
          alias dolorem commodi delectus iure! Incidunt dolor illum doloribus
          cumque?
        </div>
        <div className="w-1/2">
          <table>
            <thead>
              <tr>
                <th>TECH</th>
                <th>RESULT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
