import './CoreConcept.css';

export default function CoreConcept(obj) {
  return (
    <li>
      <img src={obj.image} alt={obj.title} />
      <h3>{obj.title}</h3>
      <p>{obj.description}</p>
    </li>
  );
}