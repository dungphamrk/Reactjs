interface Props {
    name: string; 
  }
  
  let Children_Comp: React.FC<Props> = ({ name }) => {
    return (
      <div>
        <h2> component con</h2>
        <p>ten cua cha la: {name}</p>
      </div>
    );
  };
  
  export default Children_Comp;