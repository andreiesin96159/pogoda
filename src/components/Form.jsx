
  
export const Form = (props) =>{
    

return (

<form onSubmit={props.weaterMethode} className="form">

<input type="search" name="city" className="search__input" placeholder="Укажите город"></input>
</form>
);


}
export default Form;
