const Navigation = (props) => {
  return (
    <div>
    <button onClick={props.prev}>Précedent</button>
    <button onClick={props.next}>Suivant</button>
    </div>
  );
};