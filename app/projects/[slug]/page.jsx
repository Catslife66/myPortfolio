import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full p-8">
      <div className="flex flex-col space-y-8">
        <h2 className="text-4xl font-bold">
          Project Intro consectetur adipisicing elit. Ipsa, quas.
        </h2>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tags
              </th>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lorem ipsum dolor sit amet.
              </th>
              <td className="px-6 py-4">Lorem ipsum dolor sit amet.</td>
              <td className="px-6 py-4">Lorem ipsum dolor sit amet.</td>
              <td className="px-6 py-4">$Lorem ipsum dolor sit amet.</td>
              <td className="px-6 py-4">$Lorem ipsum dolor sit amet.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <Image src="../assets/images/placeholder.jpg" alt="placeholder" />
      </div>

      <div>
        Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci repellat eligendi quas itaque voluptatum voluptas enim facere,
        tempora praesentium, magnam sequi nesciunt, minus corporis? Assumenda,
        culpa quis, enim illum ut esse quibusdam facere ducimus neque magnam ea
        recusandae fugit molestiae sequi at saepe voluptates eos repudiandae
        molestias perferendis velit maxime.
      </div>

      <div className="max-w-screen-md mx-auto flex flex-col justify-center items-center space-y-4 py-8">
        <h3 className="font-bold">1. Identify the problems</h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima est
          dolor modi vel! Deleniti dolorum consectetur rerum quis. Dolorum
          aperiam rem dolores eligendi beatae culpa, a exercitationem debitis
          odit praesentium molestiae harum facere consectetur dolorem laudantium
          animi, in, quos reiciendis blanditiis saepe voluptate fuga earum?
          Deserunt consectetur quibusdam nam tempora?
        </p>
      </div>
    </div>
  );
}
