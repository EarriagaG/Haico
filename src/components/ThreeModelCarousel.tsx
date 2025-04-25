'use client';

import { useState } from 'react';
import Viewer3D from './Viewer3D';

type Model = {
  title: string;
  path: string;
};

type Props = {
  models: Model[];
};

export default function ThreeModelCarousel({ models }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full mb-10">
      <div className="flex justify-center gap-4 mb-4 flex-wrap">
        {models.map((m, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selected === i
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-700 border-blue-600 hover:bg-blue-50'
            } transition`}
          >
            {m.title}
          </button>
        ))}
      </div>

      <Viewer3D path={models[selected].path} height={500} />
    </div>
  );
}
