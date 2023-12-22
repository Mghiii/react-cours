export default function Product(props) {
  return (
    <>
      <tr>
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {props.product.id}
        </td>
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {props.product.title}
        </td>
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {props.product.price}
        </td>
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {props.product.description}
        </td>
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {props.product.category}
        </td>
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <img
            src={props.product.image}
            alt={props.product.title}
            className="h-50 w-20 object-cover rounded-lg"
          />
        </td>
        <td className="px-6 py-3 text-left text-xs font-medium flex items-center justify-center">
          <span className="inline-block bg-blue-500 text-white rounded-lg px-2 py-1">
            {props.product.rating.rate}/5
          </span>
        </td>
      </tr>
    </>
  );
}
