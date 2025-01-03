import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from "react";
import Image from 'next/image';

export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6">
        <div className="flex h-20 shrink-0 items-end rounded-lg gradient p-4 md:h-52">
          {/*<AcmeLogo/>*/}
        </div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-800 px-6 py-10 md:w-1/2 md:px-6">

            <h2 className={`text-xl md:text-3xl md:leading-normal`}>
              Timéo Quehen
            </h2>
            <p>
              Etudiant BUT3 à l'IUT de Lens.
              Adepte de Développement Web.
            </p>
            <nav className="flex flex-row justify-between ">

              <Link
                  href="/dashboard/tools/"
                  className="flex items-center gap-5 w-1/3 m-1 rounded-lg bg-pink-500 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base"
              >
                <span>Mes outils</span> <ArrowRightIcon className="w-5 md:w-6"/>
              </Link>

              <Link
                  href="/dashboard/"
                  className="flex items-center gap-5 w-1/3 m-1 rounded-lg bg-purple-700 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base"
              >
                <span>A propos</span> <ArrowRightIcon className="w-5 md:w-6"/>
              </Link>

              <Link
                  href="/dashboard/projects/"
                  className="flex items-center gap-5 w-1/3 m-1 rounded-lg bg-blue-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base"
              >
                <span>Mes projets</span> <ArrowRightIcon className="w-5 md:w-6"/>
              </Link>

            </nav>
          </div>
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-800 px-6 py-10 md:w-1/2">
            <div className={"flex gap-4"}>
              <h3 className={"font-bold text-xl"}>Hot off the press !</h3>
              <span
                  className="bg-gray-100 text-gray-800 text-sm font-medium mb-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"> 24/12/2024 </span>
            </div>
            <p>
              Création du portfolio ! Hello world :) <br/>
              (Ah oui apprentissage de react avec ce projet en NextJS)
            </p>
          </div>
        </div>
      </main>
  );
}
