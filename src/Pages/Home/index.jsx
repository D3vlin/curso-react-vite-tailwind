import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProducDetail } from "../../Components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => {
            return <Card key={item.id} data={item} />
          })
        )
      } else {
        return (
          <div>No hay resultados</div>
        )
      }
    }
    else {
      return (
        context.items?.map(item => {
          return <Card key={item.id} data={item} />
        })
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl mb-4">Home</h1>
      </div>
      <input
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        type="text" placeholder="Search a product"
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProducDetail />
    </Layout>
  )
}

export { Home };