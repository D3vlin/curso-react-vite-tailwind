import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import {ApiFakeStore } from "../../api" 

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(`${ApiFakeStore}/products`)
    .then(response => response.json())
    .then(response => setItems(response))
    .catch(error => console.error(error))
  }, [])

    return (
        <Layout>
          Home
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            items?.map(item => {
              return <Card key={item.id} data={item} />
            })
          }
          </div>
        </Layout>
    )
}

export {Home};