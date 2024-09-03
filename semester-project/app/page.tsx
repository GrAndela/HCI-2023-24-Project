"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import "@fortawesome/fontawesome-free/css/all.css";
import "./home.css"; // Reference the new CSS file for home page styles

interface AnimalFields {
  name: string;
  image: any;
  species: string;
  description: string[];
}

interface Animal {
  sys: {
    id: string;
  };
  fields: AnimalFields;
}

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'b1y65b41b9h4',
  accessToken: 'l_NSgS6j86JPjxwHXR9TuwHGO74-5C_vN3hCtm63Mb8',
});

export default function Home() {
  const [entries, setEntries] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await client.getEntries({
          content_type: 'animal',
        })) as { items: Animal[] };

        setEntries(response.items.slice(0, 3));
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <main className="flex flex-col items-center justify-between p-10">
        <div className="title">
          <span>A</span>nimal <span>S</span>helter
        </div>
        <div className="animal-list">
          {entries.map((entry) => (
            <div key={entry.sys.id} className="animal-card">
              {entry.fields.image && (
                <img
                  src={entry.fields.image.fields.file.url}
                  alt={entry.fields.name}
                  className="animal-image"
                />
              )}
              <div className="animal-info">
                <h2 className="animal-name">{entry.fields.name}</h2>
                <p className="animal-description">
                  {entry.fields.description.slice(0, 3).map((sentence, index) => (
                    <React.Fragment key={index}>
                      {sentence}
                      {index !== 2 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <Link href={`/adopt/${entry.sys.id}`} className="read-more">
                  Read more...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
