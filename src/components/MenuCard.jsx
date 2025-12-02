function MenuCard({ name, description, price, tags }) {
  return (
    <div className="shadow-xl rounded-2xl p-4 bg-white flex flex-col items-center text-center w-80 h-50">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      {tags.length > 0 && (
        <div className="flex gap-2 mb-2 justify-center flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs font-bold text-white bg-red-700 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="font-bold mt-auto">£{price.toFixed(2)}</p>
    </div>
  );
}
export default MenuCard;