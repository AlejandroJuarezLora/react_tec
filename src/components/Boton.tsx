
interface Props{
    children: string;
    alClick: () => void;
    color?: "primary" | "secondary" | "success"| "danger";
    
}


const Boton = ({children, alClick, color = "primary"} :  Props) => {
    return (
        <button 
            type="button" 
            className={"btn btn-"+color} 
            onClick = {alClick}>
                {children}
        </button>
    );

};

export default Boton;