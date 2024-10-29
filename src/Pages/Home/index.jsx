import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

function Home() {
    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
          Home
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            context.items?.map(item => {
              return <Card key={item.id} data={item} />
            })
          }
          </div>
        </Layout>
    )
}

export {Home};