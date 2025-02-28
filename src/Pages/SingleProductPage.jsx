import { useLocation } from "react-router-dom"

export default function SingleProductPage() {

  const location = useLocation();
  const plantData = location.state;

  console.log(plantData);

  return (
    <div>
      SingleProductPage
    </div>
  )
}
